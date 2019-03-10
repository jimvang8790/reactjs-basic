This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Notes
- Tutorial Videos: https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

## What is React
 - Open source library for building user interfaces
 - NOT a Framework
 - Focus on UI, Does Not focus on the other aspects of application like routing and HTTP requests
 - Rich ecosystem

## Why Learn React?
 - Created and maintain my Facebook
 - Huge community
 - More thatn 100K starts on Github
 - In demand skillset
 - Seamlessly integrate react into any of your applications.
 - Portion of your page or a complete page or even an entire application itself.
 - React native for mobile applications

## React Component Based Architerture
 - This let you break down your application into small encapsulated parts which can then be composed to make more complex UIs
 - EX: A traditional website can be broken down into header, side nav, main content, and footer. Each section represents a component which when composed in the right way make up the entire website.
 - Component also make it possible to write reusable 
 - Resuable Code
    - Could have the component for an article on react and the same component can be used for articales on angular or view by simply passing the right data into the artical component.

## React is Declarative
- Tell React what you want and React with its react DOM library will build the actual UI. This is the declarative paradigm now this is in contrast with the imperative paradigm we are usually used to which implements algorithems in explicit steps. 
- React will handle efficiently updating and rendering of the components
- DOM updates are handles gracefully in React.

## Prerequisites 
- HTML, CSS and JavaScript fundamentals
- ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.
- JavaScript - keywords: this, filter, map and reduce.

# Getting Started
- To create a new react repo run command: $ `npx create-react-app <app-name>`
- To start app run the command: `npm start`
- npx is a npm package runner 

## Public Folder
- The index.html will be the only html file in your React project, hence a single page
- The ```<div id="root"></div>``` responsible for the UI located in public/index.html

## Src Folder
- Starting point is `index.js` file. This file specifies the root component which is App component and the DOM element which will control by React.
- The DOM element is the element with the id='root', which is the div element in the index.html file. So the App component is render inside the ```<div id="root"></div>```element.
- In the `App.js` the App component is also present and is responsible for the HTML being displayed in the browser.
- The `App.css` is the styles for the App component.
- The `Index.css` is the styles for the body tag.
- The `App.test.js` is for unit test.
- The `serviceWorker.js` is for progressive web app but can be ignore for now.

## Components
- In React a component represents a part of the user interface
- EX: A React project will usually have about 5 components
    1) Header
    2) SideNav
    3) MainContent
    4) Footer
    5) Root(App) Component wrapping everything
- Each components describe only a part of the user interface, however all the components come together to make up the entire application.
- Components are also re-usable, the same component can be used with different properties to display different information
- Components can also contain other components, like App component containing all the other component

## Component in Code 
- A component code is usually placed in a JavaScript file for ex: the App component is placed in App.js
- Can also have have component files with .jsx extension 
- So a component is basically the code inside a .js file

## 2 Component Types in React
1) Stateless Functional Component = literally JavaScript functions that return HTML which describes the UI
    ex: 
    ```javascript
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

2) Stateful Class Component = regular ES6 classes extending component class. Must contain a render method returning HTML
    ex: 
    ```javascript
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
