# jupiter

[Vue3](https://vuejs.org/) 向けのコンポーネントライブラリ

* 「どのようなデバイスから見ても壊れにくい画面」を楽に構築できるようにサポートします
* [EveryLayout](https://every-layout.dev/) 、 [DefensiveCSS](https://defensivecss.dev/) の考え方に基づいたレイアウト部品を提供します
* その他、一般的な業務アプリケーションの画面構築に必要な基礎部品を提供します
* 適用先のプロジェクトの事情に合わせられるよう、テーマなどのカスタマイズポイントを提供します

## ライブラリ利用者向け

* TODO

## ライブラリ開発者向け

* VSCode or IntellijIDEA での開発を推奨します
* ローカル開発環境のNode.jsのバージョン管理には [Volta](https://volta.sh/) の利用を推奨します
* 内部的にはスタイリングに [tailwindcss](https://tailwindcss.com/) を利用しますが、ライブラリ利用側にはそれを漏らさないようにします

### 依存ライブラリのインストール

```sh
npm install
```

### 開発環境の起動

```sh
npm run story:dev
```

開発/ドキュメンテーションには [Histoire](https://histoire.dev/) を利用しています

### 単体テストの実行

```sh
npm run test:unit
```

単体テストには [Vitest](https://vitest.dev/) + [VueTestingLibrary](https://testing-library.com/docs/vue-testing-library/intro/) を利用しています
