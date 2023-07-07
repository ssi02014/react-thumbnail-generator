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
  <img src="https://img.shields.io/badge/@emotion-green">
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

<h3 align="center">Storybook Demo Page</h3>
<h5 align="center">Click on the icon.</h5>
<p align="center">
  <a href="https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default">
    <img src="https://user-images.githubusercontent.com/64779472/220122236-c90ae4a5-8271-41df-b150-230b97991d41.png" width="120">
  </a>
</p>


## Video 📷

<h3 align='center'>Default</h5>
<p align='center'>
  <img width="450" src="https://user-images.githubusercontent.com/64779472/221564006-0739ba47-c03a-498b-a9b7-24b87e878878.gif">
</p>

<br />

<h3 align='center'>Picture</h5>
<p align='center'>
  <img width="450" src="https://user-images.githubusercontent.com/64779472/221565682-6eefb15c-92bd-4a3e-83ec-953b9b0acb5b.gif">
</p>

<br />

## Features 😁

- Download thumbnail images
- Resize the canvas
- Fill the background with colors or pictures
- Select a blur effect
- Select font family, textAlign, size, stroke, color, angle, lineHeight
- Drag and Drop text on the canvas
- Add custom web font families
- Select the modal button and its location
- Choose the image type (png, jpg, webp, svg)
- Support TypeScript and Next(v13)


<br />

## Top Icons Feature 
<img width="450" alt="스크린샷 2023-02-27 오후 9 53 09" src="https://github.com/ssi02014/react-thumbnail-generator/assets/64779472/d23a255e-3dc3-4140-b016-26f77e7afe1e">

- 1: Background Picture 
- 2: Text Align (start, center, end)
- 2: Background Color
- 3: Font Color
- 4: Font Stroke Color
- 5: Blur Effect

<hr />

## How to use React 😊
### STEP 1️⃣
- Install Package
```
yarn add react-thumbnail-generator
or
npm install react-thumbnail-generator
```

<br />

### STEP 2️⃣
- Add `<ThumbnailGenerator>` component.
- ThumbnailGenerator is automatically rendered as a `document.body` child by default using `Portal`.

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';
import iconImage from '../assets/colorImage.png';

const App = () => {
  return (
    <ThumbnailGenerator
      buttonIcon={<img src={iconImage} width={30} height={30} alt="iconImage" />}
      // To insert the inner icon of the button that opens the thumbnail modal, use the ReactNode. 
      // If you do not include this option, the default icon will be used.

      iconSize="medium"
      // Through this property, you can specify the size of the button icon.
      // However, if you are inserting a custom button icon, this option is meaningless.

      iconPosition={[0, 20, 20, 0]}
      // Through this property, you can specify the position of the button icon.
      // [top, right, bottom, left]

      modalPosition='right'
      // Through this property, you can specify the position of the thumbnail generator.
      
      additionalFontFamily={['Noto Sans', ...]}
      // You can add the font of your choice to your project, but that font must already applied to your project.

      isFullWidth={true}
      // Setting this property to true will make the thumbnail generator full-width.

      isDefaultOpen={false}
      // Setting this property to true will open the thumbnail generator by default.
    />
  )
}
```

<br />

## How to use Next(v13) 😊
### STEP 1️⃣
- Install Package
```
yarn add react-thumbnail-generator next-transpile-modules
or
npm install react-thumbnail-generator next-transpile-modules
```

<br />

### STEP 2️⃣
- Modify next.config
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-step-parallax"],
};

module.exports = nextConfig;
```

<br />

### STEP 3️⃣
- Add `<ThumbnailGenerator>` to dynamic import.

```jsx
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  return (
    <ThumbnailGenerator 
      buttonIcon={<Image src={buttonIcon} width={30} height={30} alt="buttonIcon" />} 
    />
  );
}

```


<br />

## How to add Web fonts 😊
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
    <ThumbnailGenerator 
      additionalFontFamily={["Zeyada"]} // (*)
    />
  )
}
```

<br />
<br />

## API 📄
- buttonIcon
  - **Optional**
  - Default: <img width="43" alt="스크린샷 2023-02-20 오후 10 48 05" src="https://user-images.githubusercontent.com/64779472/220125380-77aaaa79-9baf-4252-aa46-a44e6e91dd3d.png">
  - Type: `ReactNode`
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
- isFullWidth
  - **Optional**
  - Default: `false`
  - Type: `boolean`
- isDefaultOpen
  - **Optional**
  - Default: `false`
  - Type: `boolean`

<br />

## Reference
- https://github.com/wormwlrm/kwakcheolyong
- https://github.com/banner-maker/banner-makers

<br />