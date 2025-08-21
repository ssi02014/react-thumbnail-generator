# 💻 react-thumbnail-generator
[English](README.md) | 한국어 | [简体中文](README-zh_cn.md) | [日本語](README-ja_jp.md)

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
`react-thumbnail-generator`는 웹 브라우저에서 직접 썸네일을 쉽게 생성하고 커스터마이징할 수 있는 React 컴포넌트입니다. 직관적인 인터페이스와 풍부한 기능으로 애플리케이션을 떠나지 않고도 프로젝트용 썸네일을 생성할 수 있습니다.

https://github.com/user-attachments/assets/5d4f8c23-72c6-43ae-aa62-5c46ee0ddfc6

<br />

### Key Features
- 🎯 간단한 드래그 앤 드롭 인터페이스
- 🎨 배경 색상/이미지 커스터마이징
- ✍️ 다양한 폰트와 효과로 텍스트 스타일링
- 📏 유연한 캔버스 크기 조정
- 🖼️ 다양한 내보내기 형식 (PNG, JPG, WebP)
- 🔧 높은 설정 가능성을 가진 위치 및 외관
- 📱 데스크톱 브라우저 최적화
- 📱 클라이언트 사이드 전용 컴포넌트

<br />

## Demo Page 🖼️
[react-thumbnail-generator demo page](https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default)

<br />

### Version Compatibility 🔄
react-thumbnail-generator `v4`는 `react/react-dom v19`을 지원합니다.

react v18를 사용하고 있다면 `v3` 버전을 사용해주세요.

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
- 패키지 설치
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
- `<ThumbnailGenerator>` 컴포넌트를 추가합니다.
- ThumbnailGenerator는 기본적으로 `Portal`을 사용하여 `document.body`의 자식으로 자동 렌더링됩니다.

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';

const App = () => {
  return (
    <ThumbnailGenerator
      iconPosition="bottom-right"
      // 토글 버튼 아이콘의 위치 지정 (top-left, top-right, bottom-left, bottom-right)

      modalPosition="right"
      // 썸네일 생성기가 표시될 위치 지정 (left, right, center)

      iconSize="medium" 
      // 토글 버튼 아이콘의 크기 설정 (small, medium, large)

      additionalFontFamily={['Noto Sans', ...]}
      // 생성기에서 사용할 커스텀 폰트 추가
      // 중요: 폰트가 프로젝트에 이미 로드되어 있어야 작동합니다

      isFullWidth={true}
      // true일 때 썸네일 생성기가 전체 너비로 확장됩니다

      isDefaultOpen={false}
      // true일 때 로드 시 썸네일 생성기가 자동으로 열립니다
    />
  )
}
```

<br />

## How to add Web Fonts 😊
### STEP 1️⃣
- `public/index.html` 또는 `index.html`에 웹 폰트를 추가합니다
- 또는 `CSS/SCSS` 파일에서 웹 폰트를 import합니다

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <!-- 웹 폰트 추가 -->
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
- `additionalFontFamily` prop에 폰트 이름을 배열로 추가합니다
- 폰트 이름은 로드된 웹 폰트와 정확히 일치해야 합니다

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
  - **Optional**
  - Default: `bottom-right`
  - Type:`top-left | top-right | bottom-left | bottom-right`
- modalPosition
  - **Optional**
  - Default: `right`
  - Type:`left | right | center`
- iconSize
  - **Optional**
  - Default: `medium`
  - Type: `small | medium | large`
- additionalFontFamily
  - **Optional**
  - Type: `string[]`
- isFullWidth
  - **Optional**
  - Default: `false`
  - Type: `boolean`
- isDefaultOpen
  - **Optional**
  - Default: `false`
  - Type: `boolean`

<br />

## Contributing

여러분의 기여에 감사드립니다. ❤️ 누구나 `react-thumbnail-generator`에 기여할 수 있습니다.

<a href="https://github.com/ssi02014/react-thumbnail-generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ssi02014/react-thumbnail-generator">
</a>

<br />

## License
MIT © ssi02014. 자세한 내용은 [LICENSE](./LICENSE)를 참조하세요.
