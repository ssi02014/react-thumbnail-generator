# 💻 react-thumbnail-generator
English | [한국어](README-ko_kr.md) | [简体中文](README-zh_cn.md) | [日本語](README-ja_jp.md)

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
`react-thumbnail-generator` is a versatile React component that allows you to easily create and customize thumbnails directly in your web browser. With an intuitive interface and rich feature set, you can generate  thumbnails for your projects without leaving your application.

https://github.com/user-attachments/assets/5d4f8c23-72c6-43ae-aa62-5c46ee0ddfc6

<br />

### Key Features
- 🎯 Multi-layer system with drag, rotate, and resize per layer
- 🖼️ Support for both text and image layers
- 🎨 Background color/image customization with auto-resize
- ✍️ Per-layer text styling (font, size, color, stroke, alignment)
- ↩️ Undo / Redo with keyboard shortcuts (Ctrl+Z / Ctrl+Shift+Z)
- 📏 Flexible canvas sizing with boundary guard
- 💾 Multiple export formats (PNG, JPG, WebP)
- 📱 Mobile responsive layout

<br />

## Demo Page 🖼️
[react-thumbnail-generator demo page](https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default)

<br />

## Version Compatibility 🔄
react-thumbnail-generator `v4` supports `react/react-dom v19`.

If you are using react v18, please use version `v3`.

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
- Install Package
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
- Add `<ThumbnailGenerator>` component.
- ThumbnailGenerator is automatically rendered as a `document.body` child by default using `Portal`.

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';

const App = () => {
  return (
    <ThumbnailGenerator
      iconPosition="bottom-right"
      // Specify the position of the toggle button icon (top-left, top-right, bottom-left, bottom-right)

      modalPosition="right"
      // Specifies the position where the thumbnail generator will be displayed (left, right, center)

      additionalFontFamily={['Noto Sans', ...]}
      // Add custom fonts to use in the generator
      // Important: Fonts must be already loaded in your project to work

      isFullWidth={true}
      // Makes the thumbnail generator expand to full width when true

      isDefaultOpen={false}
      // Opens the thumbnail generator automatically on load when true
    />
  )
}
```

<br />

## How to add Web Fonts 😊
### STEP 1️⃣
- Add a web font in `public/index.html` or `index.html`
- Or import web fonts in your `CSS/SCSS` files

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <!-- Add a web font -->
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
- Add font names as an array to the `additionalFontFamily` prop
- The font names must match exactly with the loaded web fonts

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
| `iconPosition` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'` | Position of the toggle button icon |
| `modalPosition` | `'left' \| 'right' \| 'center'` | `'right'` | Position where the thumbnail generator modal is displayed |
| `additionalFontFamily` | `string[]` | `-` | Custom fonts to add to the generator (must be pre-loaded) |
| `isFullWidth` | `boolean` | `false` | Expands the generator to full width |
| `isDefaultOpen` | `boolean` | `false` | Opens the generator automatically on load |

<br />

## Contributing

Thank you for your contribution. ❤️ Anyone can contribute to `react-thumbnail-generator`.

<a href="https://github.com/ssi02014/react-thumbnail-generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ssi02014/react-thumbnail-generator">
</a>

<br />

## License
MIT © ssi02014. See [LICENSE](./LICENSE) for details.