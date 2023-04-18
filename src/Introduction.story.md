---
group: 'top'
icon: 'carbon:bookmark'
title: 'はじめに'
---

# cuv

[Vue3](https://vuejs.org/) 向けのコンポーネントライブラリ

* 「どのようなデバイスから見ても壊れにくい画面」を楽に構築できるようにサポートします
* [EveryLayout](https://every-layout.dev/) 、 [DefensiveCSS](https://defensivecss.dev/) の考え方に基づいたレイアウト部品を提供します
* その他、一般的な業務アプリケーションの画面構築に必要な基礎部品を提供します
* 適用先のプロジェクトの事情に合わせられるよう、テーマなどのカスタマイズポイントを提供します

## ライブラリのセットアップ
### 前提条件
* Node.js のバージョン 16.0 以上がインストールされていること
* このライブラリ導入先のプロジェクトには、Vue.jsのバージョン 3.2 以上がインストールされていること

### 1. @actier-luchta/cuvのインストール
プロジェクトを作成後、直下にpackage.jsonが存在するディレクトリで、`@actier-luchta/cuv`のインストールを実行します
```sh
npm install @actier-luchta/cuv
```

### 2. @mdi/jsのインストール

このライブラリはMaterial Design Iconsを使用するため、`@mdi/js`をインストールします
```sh
npm install @mdi/js
```

### 3. main.tsの設定

`main.ts`にこのライブラリのスタイルシートをimportします
```ts
import '@actier-luchta/cuv/style'
```

#### Nuxtで使用する場合
`plugins`ディレクトリの下に、`cuv.ts`ファイルを作成し、ライブラリのスタイルシートをimportします
```ts
import '@actier-luchta/cuv/style'

export default defineNuxtPlugin((nuxtApp) => {
})
```

### リンク
* [リリースノート](https://github.com/actier-luchta/cuv/releases/)
* [リポジトリ](https://github.com/actier-luchta/cuv/)