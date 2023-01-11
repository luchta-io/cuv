# jupiter

[Vue3](https://vuejs.org/) 向けのコンポーネントライブラリ

* 一般的な業務アプリケーションの画面構築に必要な基礎部品を提供します
* [EveryLayout](https://every-layout.dev/) の考え方に基づいたレイアウト部品を提供します
* [Tailwindcss](https://tailwindcss.com/) の仕組みに基づきテーマをカスタマイズ可能にします

## ライブラリ利用者向け

* TODO

## ライブラリ開発者向け

* VSCode or IntellijIDEA での開発を推奨します
* ローカル開発環境のNode.jsのバージョン管理には [Volta](https://volta.sh/) の利用を推奨します

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
