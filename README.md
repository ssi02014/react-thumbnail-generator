# 💻 react-thumbnail-generator

<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/64779472/219855230-d6515d16-334c-432a-8d20-fa171e17c231.png" />
</p>

<h2 align="center">Simply create a thumbnail generator for your project🚀 </h2> 

<p align="center">
  <img src="https://img.shields.io/badge/styled--components-5.3.6-green">
  <img src="https://img.shields.io/badge/react--color--palette-6.2.0-green">
</p>
 
<br/>
<br/>

## Storybook Github Page

[<img width="105" alt="스크린샷 2023-02-20 오후 10 32 01" src="https://user-images.githubusercontent.com/64779472/220122236-c90ae4a5-8271-41df-b150-230b97991d41.png">](https://ssi02014.github.io/react-thumbnail-generator/?path=/story/components-thumbnailgenerator--default)


<br />

## How to use 😊
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

        iconSrc={iconImage}
        // You can select the icon of the modal open button that you want.
        // If you do not enter this option, the default icon takes effect.

        position="bottom-right" 
        // You can select the location of the button that opens the modal.
        // If you do not enter this option, the default position(bottom-right) is applied

        iconSize="medium"
        // You can select the size of the button that opens the modal.
        // If you do not enter this option, the default size(medium) applies
        
        additionalFontFamily={['Noto Sans', ...]}
        // You can add the font you want. But those fonts should already be applied to your project.
      />
    </div>
  )
}
```

<br />

## How do I apply Web Fonts? 🤔
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

<img width="721" alt="스크린샷 2023-02-20 오후 10 26 00" src="https://user-images.githubusercontent.com/64779472/220121084-1f2d57db-1c0d-4709-9c24-473ee4f55152.png">

<br />

## Video 📷
### Background Color
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/64779472/220112887-cc3c81a9-7b88-49e2-bc53-677c0508388a.gif)

### Picture
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/64779472/220118455-d954b4b8-2ab6-48c4-b874-0350839b1330.gif)


### 🔥 The text displayed on the screen will be line-wrapped.

<br />

## API 📄
- id
  - **Optional**
  - Type: `string`
- iconSrc
  - **Optional**
  - Type: `string`
- position
  - **Optional**
  - Default: `bottom-right`
  - Type: `bottom-right | bottom-left | top-right | top-left`
- iconSize
  - **Optional**
  - Default: `medium`
  - Type: `small | medium | large`
- additionalFontFamily
  - **Optional**
  - Type: `string[]`