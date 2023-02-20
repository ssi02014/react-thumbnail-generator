# 💻 REACT-THUMBNAIL-GENERATOR

<br />

![thumbnail](https://user-images.githubusercontent.com/64779472/219855230-d6515d16-334c-432a-8d20-fa171e17c231.png)

### Simply create a thumbnail generator for your project 🚀 

<br />

## I recommend it to these people 😄
- A person to create a simple image.
- A person who runs a personal blog and needs a thumbnail before registering a post.

<br />

## How to install 😊
```
yarn add react-thumbnail-generator
or
npm install react-thumbnail-generator
```

<br />

## How to use 😊
```jsx
import ThumbnailGenerator from 'react-thumbnail-generator';
import color from '../assets/color.png';

const App = () => {
  return (
    <div>
      <ThumbnailGenerator
        iconSre={color}
        // You can select the icon of the modal open button that you want.
        position="bottom-right" 
        // You can select the location of the button that opens the modal.
        iconSize="medium"
        // You can select the size of the button that opens the modal.
      />
    </div>
  )
}
```