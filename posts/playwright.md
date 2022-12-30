---
title: '変化に強くなるための自動テスト環境構築'
createdAt: '2022/12/30'
updatedAt: ''
tags:
  - 'Playwright'
  - '自動テスト'
---

# 概要

[個人 Blog](https://seyyyy.com)のリグレッションテストを自動化して、リリースまでにかかる時間を短縮した。  
Next.js で作成した Web アプリケーションを[Playwright](https://playwright.dev/)を使用して自動テストを行った。

# きっかけ

年末なので、[個人 Blog](https://seyyyy.com)をかっこよく作りたい！と思った。とはいえ、機能追加していくにも毎回目視確認していくのめんどくさい（まあ自分以外誰にも影響を与えないのであんまり気にしなくてもよいのだが、、、）ので、まずはその目視確認を自動化していくことにした。スパッと作ってスパッとリリースできる明るい未来があると信じて、、、。  
まあ、本業で使っているツールと違うツールで自動テストを試してみたい！という思いもあった(笑)

# やってみた

## Playwright でできること

Playwright で行うテストは`Google Chrome`、`Microsoft Edge`、`Firefox`など主要なブラウザを[サポートしている](https://playwright.dev/docs/browsers)。なので、ブラウザ上で動作しているアプリケーションのテストを行うことが可能である。また、Headless 環境で実行できるので Github Actions などの CI 環境でも実行できる。  
その他にも、[GUI から操作](https://playwright.dev/docs/codegen-intro#running-codegen)してテストコードを（ある程度）作成できたりもする。

## とりあえずサンプル通りにやってみる

とりあえず[Getting Started](https://playwright.dev/docs/intro)の通りに作る。

```
$ yarn create playwright
```

ディレクトリ構成とかテスト実行に必要なブラウザの実行環境をインストールするかなど聞かれるので回答していく。  
すると下記のファイルが作成される。

```
playwright.config.ts
tests/example.spec.ts
tests-examples/demo-todo-app.spec.ts
```

下記コマンドを実行するとテストが実行される。(デフォルトだと`tests/example.spec.ts`がそのまま実行される。)

```
$ yarn playwright test
```

ここまで実行できれば準備完了。

## 実際に作成したアプリケーションをテストする

Playwright には GUI からコードを生成できる機能があるので、実際にやってみる。  
上記を行うためには、実行するためのサーバを起動しないといけない。

```
// ローカルホストでサーバを起動
$ yarn build && yarn start
$ yarn playwright codegen http://localhost:3000
```

[別ウィンドウでブラウザが起動](https://playwright.dev/docs/codegen-intro#running-codegen)するので、アプリケーションを操作する。
すると、ブラウザと一緒に起動された Playwright のエディタに下記のようなコードが生成される。

```js
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Light Theme' }).click()
  await page.getByRole('heading', { name: 'Blog' }).click()
})
```

ただ、上記のコードでは意図通りの結果になっているか検証できていないので`expect`を使って補足していく。

```js
import { test, expect } from '@playwright/test'

test('ナビゲーションバーのテーマチェンジボタンを押下するとダークモードが表示される', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Light Theme' }).click()
  const result = await page.locator('html.dark').all()
  await expect(result.length).toBe(1)
})
```

コードが作成できたら、テストを実行し問題なく Pass することを確認して完了。

```
$ yarn playwright test
```

# 感想

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)と構文が似てたので、以外とすんなり E2E テストを作成できた。  
ただ、普段 View のテストを書かない人からしたら、HTML の要素選択とかで躓くのかな？と思った。
