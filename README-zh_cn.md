# 💻 react-thumbnail-generator
[English](README.md) | [한국어](README-ko_kr.md) | 简体中文 | [日本語](README-ja_jp.md)

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
`react-thumbnail-generator` 是一个多功能的 React 组件，可让您直接在网页浏览器中轻松创建和自定义缩略图。凭借直观的界面和丰富的功能集，您可以在不离开应用程序的情况下为项目生成缩略图。

https://github.com/user-attachments/assets/5d4f8c23-72c6-43ae-aa62-5c46ee0ddfc6

<br />

### Key Features
- 🎯 支持逐层拖动、旋转和缩放的多图层系统
- 🖼️ 支持文本和图像图层
- 🎨 背景颜色/图像自定义及自动缩放
- ✍️ 逐层文本样式设置（字体、大小、颜色、描边、对齐）
- ↩️ 撤销 / 重做及键盘快捷键（Ctrl+Z / Ctrl+Shift+Z）
- 📏 灵活的画布尺寸调整及边界保护
- 💾 多种导出格式（PNG、JPG、WebP）
- 📱 移动端响应式布局

<br />

## Demo Page 🖼️
[react-thumbnail-generator 演示页面](https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default)

<br />

### Version Compatibility 🔄
react-thumbnail-generator `v4` 支持 `react/react-dom v19`。

如果您使用的是 react v18，请使用版本 `v3`。

```shell
yarn add react-thumbnail-generator@^3
```
```shell
pnpm add react-thumbnail-generator@^3
```
```shell
npm install react-thumbnail-generator@^3
```

<br />

## Quick Start 🚀
### STEP 1️⃣
- 安装包
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
- 添加 `<ThumbnailGenerator>` 组件。
- ThumbnailGenerator 默认使用 `Portal` 自动渲染为 `document.body` 的子元素。

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';

const App = () => {
  return (
    <ThumbnailGenerator
      iconPosition="bottom-right"
      // 指定切换按钮图标的位置 (top-left, top-right, bottom-left, bottom-right)

      modalPosition="right"
      // 指定缩略图生成器显示的位置 (left, right, center)

      additionalFontFamily={['Noto Sans', ...]}
      // 添加在生成器中使用的自定义字体
      // 重要：字体必须已在您的项目中加载才能正常工作

      isFullWidth={true}
      // 为 true 时，缩略图生成器扩展为全宽

      isDefaultOpen={false}
      // 为 true 时，加载时自动打开缩略图生成器
    />
  )
}
```

<br />

## How to add Web Fonts 😊
### STEP 1️⃣
- 在 `public/index.html` 或 `index.html` 中添加网络字体
- 或在您的 `CSS/SCSS` 文件中导入网络字体

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <!-- 添加网络字体 -->
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
- 将字体名称作为数组添加到 `additionalFontFamily` 属性
- 字体名称必须与已加载的网络字体完全匹配

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconPosition` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'` | 切换按钮图标的位置 |
| `modalPosition` | `'left' \| 'right' \| 'center'` | `'right'` | 缩略图生成器模态框的显示位置 |
| `additionalFontFamily` | `string[]` | `-` | 添加到生成器的自定义字体（需预加载） |
| `isFullWidth` | `boolean` | `false` | 将生成器扩展为全宽 |
| `isDefaultOpen` | `boolean` | `false` | 加载时自动打开生成器 |

<br />

## Contributing

感谢您的贡献。❤️ 任何人都可以为 `react-thumbnail-generator` 做出贡献。

<a href="https://github.com/ssi02014/react-thumbnail-generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ssi02014/react-thumbnail-generator">
</a>

<br />

## License
MIT © ssi02014. 详情请参见 [LICENSE](./LICENSE)。
