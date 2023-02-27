# 💻 react-thumbnail-generator

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/react-thumbnail-generator" target="_blank">
    <img src="https://user-images.githubusercontent.com/64779472/219855230-d6515d16-334c-432a-8d20-fa171e17c231.png" />
  </a>
</p>

<h2 align="center">Simply create a thumbnail generator for your project 🚀 </h2> 

<p align="center">
  <a href="https://www.npmjs.com/package/react-thumbnail-generator" target="_blank">
  <img src="https://img.shields.io/npm/v/react-thumbnail-generator.svg"></a>
  <a href="https://www.npmjs.com/package/react-thumbnail-generator" target="_blank">
  <img src="https://img.shields.io/npm/dt/react-thumbnail-generator.svg"></a>
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fssi02014%2Freact-thumbnail-generator&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/typescript-blue">
  <img src="https://img.shields.io/badge/react-blue">
  <img src="https://img.shields.io/badge/styled--components-green">
  <img src="https://img.shields.io/badge/react--color--palette-important">
  <img src="https://img.shields.io/badge/storybook-ff69b4">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/rollup-red">
  <img src="https://img.shields.io/badge/babel-yellow">
</p>
 
<br/>

<h3 align="center">🌟 CONTRIBUTORS 🌟</h3>
<p align="center">
  <a href="https://github.com/ssi02014/react-thumbnail-generator/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=ssi02014/react-thumbnail-generator">
  </a>
</p>
 

<br />

<h3 align="center">Storybook Github Page</h3>
<p align="center">
  <a href="https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default">
    <img src="https://user-images.githubusercontent.com/64779472/220122236-c90ae4a5-8271-41df-b150-230b97991d41.png" width="120">
  </a>
</p>


## Features 😁
- Download Thumbnail Image
- Resize Canvas
- Choose Background Color & Picture
- Choose Blur
- Choose Font Family & Size & Stroke & Color & Angle
- Drag & Drop Canvas Text
- Add Custom Web Font Family
- Select the Modal button and the location of the Modal.
- Choose Image Type (`png`, `jpg`, `webp`)
- Supports TypeScript & Next


<br />

## How to use React 😊
### STEP 1️⃣
- Install library
```
yarn add react-thumbnail-generator
or
npm install react-thumbnail-generator
```

<br />

### STEP 2️⃣
- Add the div box with the desired ID to `public/index.html`
- `<ThumbnailGenerator>` is applied with a `Portal` to avoid being affected by CSS inheritance.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <!-- ... -->
  </head>
  <body>
    <div id="root"></div>
    <!-- Enter the ID you want. -->
    <div id="thumbnail-generator"></div>
  </body>
</html>

```

<br />

### STEP 3️⃣
- Add \<ThumbnailGenerator> component.

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';
import iconImage from '../assets/colorImage.png';

const App = () => {
  return (
    <div>
      <ThumbnailGenerator
        id="thumbnail-generator"
        // Enter the ID of the div you added in public/index.html.
        // If you do not enter this option, it will be rendered in the "root" div
        // However, there is a possibility that the UI will change due to CSS inheritance

        buttonIcon={<img src={iconImage} width={30} height={30} />}
        // Insert the inner icon of the button that opens the thumbnail modal using the "<img>" tag
        // I recommend the 1:1 ratio icon.
        // If you do not insert this option, the default icon takes effect.

        iconSize="medium"
        // Select the size of the default buttonIcon.
        // If you do not enter this option, the default size(medium) applies
        // But if you insert the button icon yourself, the option is meaningless.
  
        iconPosition={[0, 20, 20, 0]}
        // Select the location of the button to open the Thumbnail Model.
        // Sequence: [top, right, bottom, left]

        modalPosition='right'
        // Select the location to open ThumbnailModal.
        
        additionalFontFamily={['Noto Sans', ...]}
        // You can add the font you want. But those fonts should already be applied to your project.
      />
    </div>
  )
}
```
<br />

## How to use Next 😊
### STEP 1️⃣
- Add the div box with the desired ID to `_document`
```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="thumbnail-generator"></div>
        <NextScript />
      </body>
    </Html>
  );
}
```

<br />

### STEP 2️⃣
- Add \<ThumbnailGenerator> to dynamic import.

```jsx
import dynamic from "next/dynamic";
import Image from "next/image";

const ThumbnailGenerator = dynamic(() => import("react-thumbnail-generator"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ThumbnailGenerator 
        id="thumbnail-generator" 
        buttonIcon={<Image src={profilePic} width={30} height={30} alt="buttonIcon" />} 
      />
    </>
  );
}

```


<br />

## How to add a Web font 😊
### STEP 1️⃣
- Add a web font. `public/index.html`
- or CSS fontFamily
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
    <div id="thumbnail-generator"></div>
  </body>
</html>
```

<br />

### STEP 2️⃣
- Enter font names in array form in the AdditionalFontFamily option

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';
import iconImage from '../assets/colorImage.png';

const App = () => {
  return (
    <div>
      <ThumbnailGenerator 
        id="thumbnail-generator" 
        additionalFontFamily={["Zeyada"]} // (*)
      />
    </div>
  )
}
```

<br />

### Result Screen 🖥️

<img src="https://user-images.githubusercontent.com/64779472/220677341-7b6c062f-f0f6-49dd-8bcd-b402b61660ea.png" width="450">

<br />
<br />

## Video 📷
### Default
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/64779472/220687212-d60e66fb-f8e6-450d-b33e-ca161a1b04d8.gif)

### Picture
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/64779472/220687159-375c736a-b9cc-4646-8e82-8cbca983b34c.gif)

### Blur
![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/64779472/220988711-d1399c3a-ee4a-4827-9d20-6adf7a437bd4.gif)

<br />

## API 📄
- id
  - **Optional**
  - Type: `string`
- buttonIcon
  - **Optional**
  - Default: <img width="43" alt="스크린샷 2023-02-20 오후 10 48 05" src="https://user-images.githubusercontent.com/64779472/220125380-77aaaa79-9baf-4252-aa46-a44e6e91dd3d.png">
  - Type: `Node`
- iconPosition
  - **Optional**
  - Sequence: [top, right, bottom, left]
  - Default: `[0, 20, 20, 0]`
  - Type:`[number, number, number, number]`
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

<br />

## Reference
- https://github.com/wormwlrm/kwakcheolyong
- https://github.com/banner-maker/banner-makers