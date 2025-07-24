# 💻 react-thumbnail-generator
[English](README.md) | [한국어](README-ko_kr.md) | [简体中文](README-zh_cn.md) | 日本語

<a href="https://www.npmjs.com/package/react-thumbnail-generator" target="_blank">
  <img src="https://img.shields.io/npm/v/react-thumbnail-generator.svg">
</a>
<a href="https://www.npmjs.com/package/react-thumbnail-generator" target="_blank">
  <img src="https://img.shields.io/npm/dt/react-thumbnail-generator.svg">
</a>
<a href="https://bundlephobia.com/package/react-thumbnail-generator" target="_blank">
  <img src="https://img.shields.io/bundlephobia/minzip/react-thumbnail-generator/latest?style=flat-square">
</a>


<p>
  <a href="https://www.npmjs.com/package/react-thumbnail-generator" target="_blank">
    <img src="https://user-images.githubusercontent.com/64779472/219855230-d6515d16-334c-432a-8d20-fa171e17c231.png" />
  </a>
</p>

## Overview 🎨
`react-thumbnail-generator`は、Webブラウザで直接サムネイルを簡単に作成・カスタマイズできる多機能なReactコンポーネントです。直感的なインターフェースと豊富な機能セットにより、アプリケーションを離れることなくプロジェクト用のサムネイルを生成できます。

https://github.com/user-attachments/assets/5d4f8c23-72c6-43ae-aa62-5c46ee0ddfc6

<br />

### Key Features
- 🎯 シンプルなドラッグ&ドロップインターフェース
- 🎨 背景色/画像のカスタマイズ
- ✍️ 複数のフォントとエフェクトによるテキストスタイリング
- 📏 柔軟なキャンバスサイズ調整
- 🖼️ 複数のエクスポート形式 (PNG, JPG, WebP)
- 🔧 高度に設定可能な位置と外観
- 📱 デスクトップブラウザ最適化
- 📱 クライアントサイド専用コンポーネント

<br />

## Demo Page 🖼️
[react-thumbnail-generator デモページ](https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default)

<br />

## Quick Start 🚀
### STEP 1️⃣
- パッケージのインストール
```shell
yarn add react-thumbnail-generator
```
```shell
pnpm add react-thumbnail-generator
```

```shell
npm install react-thumbnail-generator
```

<br />

### STEP 2️⃣
- `<ThumbnailGenerator>` コンポーネントを追加します。
- ThumbnailGeneratorは、デフォルトで`Portal`を使用して`document.body`の子要素として自動的にレンダリングされます。

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';

const App = () => {
  return (
    <ThumbnailGenerator
      iconPosition="bottom-right"
      // トグルボタンアイコンの位置を指定 (top-left, top-right, bottom-left, bottom-right)

      modalPosition="right"
      // サムネイル生成器が表示される位置を指定 (left, right, center)

      iconSize="medium" 
      // トグルボタンアイコンのサイズを設定 (small, medium, large)

      additionalFontFamily={['Noto Sans', ...]}
      // 生成器で使用するカスタムフォントを追加
      // 重要: フォントがプロジェクトで既に読み込まれている必要があります

      isFullWidth={true}
      // trueの場合、サムネイル生成器が全幅に拡張されます

      isDefaultOpen={false}
      // trueの場合、読み込み時にサムネイル生成器が自動的に開きます
    />
  )
}
```

<br />

## Webフォントの追加方法 😊
### STEP 1️⃣
- `public/index.html` または `index.html` にWebフォントを追加
- または `CSS/SCSS` ファイルでWebフォントをインポート

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <!-- Webフォントを追加 -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

<br />

### STEP 2️⃣
- `additionalFontFamily` プロパティにフォント名を配列として追加
- フォント名は読み込まれたWebフォントと正確に一致する必要があります

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';

const App = () => {
  return (
    <ThumbnailGenerator additionalFontFamily={["Zeyada"]} {...props} />
  )
}
```

<br />

## Options 📄
- iconPosition
  - **オプション**
  - デフォルト: `bottom-right`
  - タイプ: `top-left | top-right | bottom-left | bottom-right`
- modalPosition
  - **オプション**
  - デフォルト: `right`
  - タイプ: `left | right | center`
- iconSize
  - **オプション**
  - デフォルト: `medium`
  - タイプ: `small | medium | large`
- additionalFontFamily
  - **オプション**
  - タイプ: `string[]`
- isFullWidth
  - **オプション**
  - デフォルト: `false`
  - タイプ: `boolean`
- isDefaultOpen
  - **オプション**
  - デフォルト: `false`
  - タイプ: `boolean`

<br />

## Contributing

ご貢献いただきありがとうございます。❤️ 誰でも `react-thumbnail-generator` に貢献できます。

<a href="https://github.com/ssi02014/react-thumbnail-generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ssi02014/react-thumbnail-generator">
</a>

<br />

## License
MIT © ssi02014. 詳細は [LICENSE](./LICENSE) をご覧ください。
