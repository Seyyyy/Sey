---
title: 'PlaywrightのevaluateとevaluateHandleの使い方'
createdAt: '2023/1/14'
updatedAt: ''
tags:
  - 'ソフトウェアテスト'
---

# 概要

[page.evaluate](https://playwright.dev/docs/api/class-page#page-evaluate)と[page.evaluateHandle](https://playwright.dev/docs/api/class-page#page-evaluate-handle)は。Playwright のランタイムからでは参照できない[window](https://developer.mozilla.org/ja/docs/Web/API/Window)や[document](https://developer.mozilla.org/ja/docs/Web/API/Document)を参照したりする場合に使う。

## evaluate とは

`page.evaluate`はブラウザのコンテキストを参照するための API である。

## evaluateHandle との違い

[ドキュメントにも記載の通り](<https://playwright.dev/docs/api/class-page#page-evaluate-handle:~:text=The%20only%20difference%20between%20page.evaluate()%20and%20page.evaluateHandle()%20is%20that%20page.evaluateHandle()%20returns%20JSHandle.>)、`page.evaluate`と`page.evaluateHandle`との違いは[JSHandle](https://playwright.dev/docs/api/class-jshandle)を返却するかどうかである。

## 使い分け

`JSHandle`の使いどきがわかっていないので、今の所使い分けがわからない。
ブラウザのコンテキストを参照したいだけなら、[JSHandle.evaluate](https://playwright.dev/docs/api/class-jshandle#js-handle-evaluate)ではなく`page.evaluate`を使えば良いかなという所感ではある。
