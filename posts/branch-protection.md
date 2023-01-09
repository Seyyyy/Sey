---
title: 'Githubのブランチ保護機能をつかう'
createdAt: '2023/1/9'
updatedAt: ''
tags:
  - 'Github'
---

# 概要

Github の[ブランチ保護ルール](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)を設定することで、「Github Actions の特定のワークフローが Pass していないとマージできないというルール」「force push をさせないというルール」を強制できる(それ以外にも設定できるが今回は行わない)。
その他にも「ブランチの削除をできないようにする」こともできる。

# ワークフローを Pass しないとマージできない設定

この[ドキュメント](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#:~:text=%E5%BF%85%E8%A6%81%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%A6%E3%80%81%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E5%BF%85%E9%A0%88%E3%82%92%E6%9C%89%E5%8A%B9%E5%8C%96%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%20%E8%A9%B3%E7%B4%B0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%80%81%E3%80%8C%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%80%8D%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)の通りに`Require status checks to pass before merging`にチェックを入れる。

そして、上記にチェックを入れると表示される[検索フォーム](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#:~:text=%E7%8A%B6%E6%85%8B%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%82%92%E6%8E%A2%E3%81%97%E3%81%A6%E3%80%81%E5%BF%85%E9%A0%88%E3%81%AB%E3%81%99%E3%82%8B%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82)に対象のワークフローのジョブ名を入れる。ワークフロー名ではなく[ジョブ名](https://docs.github.com/ja/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idname)である。

これで、実行されたワークフローのステータスチェックに`Required`の記述が追加され、それが Pass しないとマージできないようになる。

## ワークフローをスキップしたときにマージできない問題を解決する

特定の条件下でスキップするワークフローが存在し上記のブランチ保護を行っている場合、ワークフローが発火しないために PR がマージできなくなってしまう問題がある。例えば、[paths-ignore](https://docs.github.com/ja/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)で docs ディレクトリを除外している場合、docs ディレクトリのみ変更した PR を発行してもワークフローは発火せずにマージできなくなる。
これを fix するために[ドキュメントのトラブルシューティング](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)に記載された内容を実施する必要がある。

# force push をさせない設定

[Allow force pushes](<https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#:~:text=%E5%BF%85%E8%A6%81%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%A6%E3%80%81%5BRules%20applied%20to%20everyone%20including%20administrators%5D(%E7%AE%A1%E7%90%86%E8%80%85%E3%82%92%E5%90%AB%E3%82%80%E5%85%A8%E5%93%A1%E3%81%AB%E9%81%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%82%8B%E3%83%AB%E3%83%BC%E3%83%AB)%20%E3%81%AE%E4%B8%8B%E3%81%A7%20%5BAllow%20force%20pushes%5D(%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B9%20%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5%E3%82%92%E8%A8%B1%E5%8F%AF)%20%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82>)を無効にする。

# ブランチの削除をできないようにする

[マージ後のブランチ自動削除](https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches)を有効にしているが、develop ブランチなど一部削除してほしくないブランチが存在する場合は、[Allow deletions](<https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#:~:text=%E5%BF%85%E8%A6%81%E3%81%AB%E5%BF%9C%E3%81%98%E3%81%A6%E3%80%81%20%5BAllow%20deletions%5D(%E5%89%8A%E9%99%A4%E3%82%92%E8%A8%B1%E5%8F%AF)%20%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82>)を無効にしておく。

# おわりに

他にも設定があるので、使いながら fix していきたい。
