---
title: 'PlaywrightとGithub Actionsでビジュアルリグレッションテストをやってみた'
createdAt: '2023/1/8'
updatedAt: '2023/1/9'
tags:
  - 'ソフトウェアテスト'
  - 'CI/CD'
---

# 概要

[前回](https://seyyyy.com/blog/e2e-test)の続きとして、ビジュアルリグレッション(以下、VRT)を自動化した。
使用するツールは前回と同じく Playwright と Github Actions である。

# Playwright でスクリーンショットを取得する

まずは VRT ができるようにし、ディレクトリ構造を整えていく。

## スクリーンショットを取得するための API

この[ドキュメント](https://playwright.dev/docs/screenshots)の通りテストケースに記述すれば良い。

## アサーションの入れ方

この[ドキュメント](https://playwright.dev/docs/api/class-snapshotassertions)の通りである。
そして自分は以下のように記述した。

```js
expect(
  await page.screenshot({ animations: 'disabled', fullPage: true })
).toMatchSnapshot('filename.png', {
  threshold: 0.1,
})
```

説明すると下記の通りである。

1. page.screenshot の[animations プロパティ](https://playwright.dev/docs/api/class-page#page-screenshot-option-animations)で CSS アニメーションが発生しないようにする。アニメーションが発生するとスクリーンショットのタイミングがずれて差分が発生してしまうからである。アニメーションをテストしたければ[動画を記録](https://playwright.dev/docs/videos)しておくのが良いのかもしれない。
2. page.screenshot の[fullPage プロパティ](https://playwright.dev/docs/api/class-page#page-screenshot-option-full-page)で画面全体を記録するようにする。記録する画像ファイル数を少なく保つためである。
3. toMatchSnapshot の[比較対象ファイル名](https://playwright.dev/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1-option-name)はわかりやすい適当な名前にする。テスト実行時に`-u`オプションを渡すと、ここで設定した名前で生成してくれる(画面のアップデートがなければ生成されない)。
4. toMatchSnapshot の[threshold プロパティ](https://playwright.dev/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1-option-threshold)はなんとなく 0.1 に設定(改善の余地はある)。小さくすると比較が厳しくなる(仕組みはいまいちわかっていない)。

ここまででとりあえず VRT ができるようになる。

## スクリーンショットの保存先指定

### 方針

スクリーンショットや画像ファイル名の命名規則を作成しておくと、CI に組み込んだり AWS S3 のようなストレージサービスに保存する時に、ディレクトリ単位で操作できるので便利だと思う。  
そして今回は下記のような命名規則で保存するようにしてみた(具体的な設定方法は後述)。

```sh
__screenshots__/<テストファイル名>-screenshots/<toMatchSnapshotの引数に指定した名前>-<実行ブラウザ名>.<拡張子>
```

※ 正確には「実行ブラウザ名」ではなく[projects の name プロパティの値](https://playwright.dev/docs/api/class-testproject#test-project-name)

「ファイル名は`test.spec.ts`」「実行ブラウザ名は chromium」と仮定し、このコードをもとにスクリーンショットを作成すると、

```js
expect(
  await page.screenshot({ animations: 'disabled', fullPage: true })
).toMatchSnapshot('filename.png', {
  threshold: 0.1,
})
```

下記のファイルが生成される。

```sh
__screenshots__/test.spec.ts-screenshots/filename-chromium.png
```

### 設定方法

上記のように画像ファイルのディレクトリと命名規則をコントロールするためには`playwright.config.ts`ファイルを修正する必要がある。  
修正内容は下記の通りである。

1. [testConfig.snapshotDir プロパティ](https://playwright.dev/docs/api/class-testconfig#test-config-snapshot-dir)でスクリーンショットが保存されるルートディレクトリを設定
2. [testConfig.snapshotPathTemplate プロパティ](https://playwright.dev/docs/api/class-testconfig#test-config-snapshot-path-template)で上記の命名規則に沿うように設定  
   具体的には下記のように設定した。

   ```sh
   snapshotPathTemplate: '{snapshotDir}/{testFilePath}-screenshots/{arg}-{projectName}{ext}'
   ```

# Github Actions で CI ワークフローに組み込む

次は CI ワークフローに組み込んで自動化していく。

## ワークフローを書く

この[ドキュメント](https://playwright.dev/docs/ci-intro)の通りである。
ただし、イベントトリガーやパッケージマネージャは環境によって修正する。

## スクリーンショット専用のワークフローを書く

機能追加によって画面差分が生じた場合、画像ファイルにアップデートをかけないといけない。

**しかしここが今回の作業において一番の詰まりポイントだった。**

なぜかというと、ローカル PC と Github Actions で使用した環境が異なるため、生成されるスクリーンショットにずれが生じてしまったからである（例えば、フォントが反映されないなど）。

### 方針

この問題を解決するために、次の 2 通りの方法を思いついた。

1. コンテナを使用して環境を揃える
2. 環境を制限する

1 つ目の「コンテナを使用して環境を揃える」方法では、コンテナが使用できる環境であればどこでも同じ画像を生成できるメリットがある。なので、画面のアップデートを行う場合は、ローカルで画像を生成してからリモートリポジトリにコミットする流れである。一方でコンテナを管理するコストが増える。  
2 つ目の「環境を制限する」では方法では、Github Actions の Runner でしか画像を生成しないようにする方法である。ローカルに画像生成環境を用意しなくて良いメリットがある。一方でワークフローの管理コストがかかる。

2 通りの方法を比較して後のことを考えると 1 つ目の方法のほうがポータビリティの観点からメリットが大きいと思ったが、次の 3 つの理由からとりあえず 2 つ目の方法を採用することにした。① コンテナレジストリを用意したり、レジストリにアップロードするワークフローを作るのがめんどくさかった(慣れていないのもある)、②Dockerfile を配置するための良いディレクトリ構造を考えるのがめんどくさかった、③Github Actions ならファイルを一つ作るだけなので管理が楽だし、1 の方法がやりたくなったときもかんたんに捨てられる。

### 実際に作成したワークフロー

下記のワークフローは workflow_dispatch をイベントトリガーにしているので、[任意のブランチから手動実行することができる](https://docs.github.com/ja/actions/managing-workflow-runs/manually-running-a-workflow)。  
そして、実行が完了したら実行したブランチに対して画像更新の PR が発行される。  
例えば`develop`ブランチでワークフローを実行すると`update-screenshots/develop`ブランチから画像更新用の PR が発行される。

```yml
name: Update ScreenShot
on:
  workflow_dispatch:

jobs:
  screenshots:
    runs-on: ubuntu-latest
    name: Update ScreenShots
    timeout-minutes: 30
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      # user.nameとuser.emailを設定しないとcommitできない
      - name: Setting User
        run: |
          git config user.name "your username"
          git config user.email "your email"

      # update-screenshots/<PR先のブランチ名>でブランチを作成
      # 「${GITHUB_REF##*/}」については後述で補足
      - name: Create new branch
        run: git checkout -b update-screenshots/${GITHUB_REF##*/}

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: yarn

      - name: Install dependencies
        run: yarn install

      - name: Install Playwright Browsers
        run: yarn playwright install --with-deps

      # 差分があるスクリーンショットを更新
      - name: Run Update ScreenShot
        run: yarn playwright test --update-snapshots

      - name: Commit ScreenShot
        run: |
          git add .
          git commit -m "test: update screenshots. ${GITHUB_REF##*/}"

      - name: Push to remote branch
        run: git push origin update-screenshots/${GITHUB_REF##*/}

      # 対象のブランチへ画像を更新したブランチからPRを発行
      - name: Create PR
        run: gh pr create --base ${GITHUB_REF##*/} --head update-screenshots/${GITHUB_REF##*/} --title "update-screenshots ${GITHUB_REF##*/}" --body "" --label "test"
```

update-screenshots/<PR 先のブランチ名>というわかりやすい(主観)名前のブランチを作成し、自分が画像更新をかけたいブランチへ PR を送るために、少々工夫が必要だった。  
それが`${GITHUB_REF##*/}`という記述である。  
まず、`${GITHUB_REF}`を参照することで`workflow_dispatch`を実行した[ブランチの HEAD への参照](https://git-scm.com/book/ja/v2/Git%E3%81%AE%E5%86%85%E5%81%B4-Git%E3%81%AE%E5%8F%82%E7%85%A7)が取得できる。文字列で表すと次のようになる(実行したブランチが develop だと仮定)。

```sh
refs/heads/develop
```

ただ、PR を発行するためには`refs/heads/`という文字列が邪魔である。そこで環境変数の末尾に`##*/`を記述することで[変数で取得した文字列の置換](https://qiita.com/aosho235/items/c36568830a8d47288284)ができる。`##*/`で前方から`*/`にマッチする最長文字列を削除できるので下記のようになる。

```sh
develop
```

これでブランチ名が取得できる。

### 追記(2023/1/9)

上記の方法(`${GITHUB_REF##*/}`)ではブランチ名`feature/style`のように`/`が入ると置換してほしくない`feature/`の部分が消えてしまうので、下記のように修正した。

```sh
${GITHUB_REF##refs/heads/}
```

# 最終的な構成

今回作成した VRT とワークフローで画面更新時は下記を行うことになった。

1. feature ブランチでスクリーンショット更新のワークフローを実行して PR 発行
2. 差分を確認して意図しないところが更新されていなければ feature ブランチにマージ

VRT を行うためにちょっと手順が増えてしまった（こういうものなのかなぁ）。

# 感想

画面のスタイルを変更するたびに VRT 用の画像を更新しなければならなくなった。
UI のスタイルバグをすぐにキャッチできるようになったのはありがたい反面、手軽にリリースできなくなった。  
ただ、これはコードが増えていくにつれ費用対効果も上がってくると思う。なぜなら、画面数が多いプロダクトで全画面の差分追うなんてつらすぎるからである。  
まあ、フローのほとんどを自動化したので、今後コードが増えても自分が実際に手を動かす時間は変わらないと考えるとかなりコスパが良いかもしれない。

あと、Github Actions の VRT のワークフローが落ちてもマージしたらいいじゃん！みたいな方法もないことはないが、オールグリーンじゃないと main ブランチにマージできないというわかりやすい運用にしたかったのでやらなかった。このワークフロー落ちてるけどマージしよう！ってなるとルールが曖昧になってテストに対する信頼性も落ちる気がする。画像の差分更新は機能実装時と同時にやりたい。  
[Github Actions のステータス](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)に`pending`、`passing`、`failing`以外のステータスもあったら良かったのになと思った（例えば、途中で VRT が失敗したら画像更新をかけるワークフローを実行するかどうかを選択させるためのチェックステータスとか？どうなんだろう）。

とりあえず VRT は続けてみてコスパ悪いと感じたらまたやり方は修正していこうかなと思う。
