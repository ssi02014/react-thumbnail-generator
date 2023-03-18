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

- Downloading thumbnail images
- Resizing the canvas
- Filling the background with colors or pictures
- Choosing a blur effect
- Selecting font family, size, stroke, color, and angle
- Dragging and dropping text on the canvas
- Adding custom web font families
- Selecting the modal button and its location
- Choosing the image type (png, jpg, webp)
- Supporting TypeScript and Next


<br />

## Top Icons Feature 
<img width="450-" alt="스크린샷 2023-02-27 오후 9 53 09" src="https://user-images.githubusercontent.com/64779472/221569330-cf13379a-b21e-43a1-a766-b22d874da60d.png">

- 1: Picture
- 2: Background Color
- 3: Font Color
- 4: Font Stroke Color
- 5: Blur Effect

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
- Enter the desired ID of the div that you want to add to `public/index.html`.
- To avoid being affected by CSS inheritance, `<ThumbnailGenerator>` is applied with a Portal.

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
- Add `<ThumbnailGenerator>` component.

```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';
import iconImage from '../assets/colorImage.png';

const App = () => {
  return (
    <div>
      <ThumbnailGenerator
        id="thumbnail-generator"
        // Please enter the ID of the div you added in public/index.html. 
        // If you do not specify an ID, it will be rendered in the "root" div. 
        // However, this may cause the UI to change due to CSS inheritance.

        buttonIcon={<img src={iconImage} width={30} height={30} alt="iconImage" />}
        // To insert the inner icon of the button that opens the thumbnail modal, use the ReactNode. 
        // If you do not include this option, the default icon will be used.

        iconSize="medium"
        // Please select the size of the default button icon. 
        // If no size is specified, the default size (medium) will be applied. 
        // However, if you are inserting a custom button icon, this option is meaningless.
  
        iconPosition={[0, 20, 20, 0]}
        // Please select the location of the button to open the Thumbnail Model.
        // Sequence: [top, right, bottom, left]

        modalPosition='right'
        // Please select the location to open the ThumbnailModal.
        
        additionalFontFamily={['Noto Sans', ...]}
        // You can add the font of your choice to your project, but that font must already applied to your project.

        isFullWidth={true}
        // Setting this property to true will make the thumbnail generator modal full width.
      />
    </div>
  )
}
```
<br />

## How to use Next 😊
### STEP 1️⃣
- Enter the desired ID of the div that you want to add to `_document`.
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
- Add `<ThumbnailGenerator>` to dynamic import.

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
- The current UI is different from the image below 🙏

<img src="https://user-images.githubusercontent.com/64779472/220677341-7b6c062f-f0f6-49dd-8bcd-b402b61660ea.png" width="450">

<br />

## API 📄
- id
  - **Optional**
  - Type: `string`
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
  - Type: `boolean`

<br />

## Reference
- https://github.com/wormwlrm/kwakcheolyong
- https://github.com/banner-maker/banner-makers