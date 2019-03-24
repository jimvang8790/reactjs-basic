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

## React Snippet
- Need the extend `ES7 React/Redux/GraphQL/React-Native snippets` 
- `rfce` short hand for creating a functional component file structure
- `rce` short hand for creating a class component file structure
- `rconst` will create a constructor 

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
    1. Header
    2. SideNav
    3. MainContent
    4. Footer
    5. Root(App) Component wrapping everything
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

## Functional Components
- Functional components are JavaScript functions, they can optionally receive an object of properties which is referred to as props and return HTML which describes the UI. Now the HTML is actually known as JSX. In summary they accept an input of properties and returns HTML that describles the UI.

## Class Components
- Class components are ES6 classes similar to a functional components a class component can optionally receive props as input and return HTML. 
- Can also maintain a private internal state. It can maintain some information which is private to that component and use that information to describe the user interface.

## Functional vs Class Components
- Functional components are simple functions, receiving props and returning a declaration 
- Use Functional components as much as possible meaning if it is possible to create a component with both the approach always use functional component.
- One advantage of Function components over a Class component is the absence of `this` keyword.
- Second advantage of Function components is you'll be forced to think of a solution without having to use `state` if you have a number of components each with their own private state maintenence and debugging your application can be difficult. Functional components tend to be without any complicated logic and are mainly responsible for the UI 
- Functional components are also known as Stateless/Dumb/Presentational components

- Class Components are more feature rich
- Class Components maintain their own private date - state
- Class components can contain complex UI logic
- Class components provide lifescycle hooks
- Class components aka Stateful/Smart/Container

## Hooks 
- Hooks are a feature proposal that lets you use state and other React features without writing a class.
- So now states and lifescycle hooks can be used by Functional components
- Hooks have no breaking changes
- Completely opt-in & 100% backwards-compatible
- Component Types = Functional components and Class components.
- Using state, lifecycle methods and `this` binding.

## JSX
- JavaScript XML (JSX) - Extension to the JavaScript language syntax.
- Write XML - like code for elements and components.
- JSX tags have a tag name, attributes, and children.
- JSX is not a necessity to write React applications.
- JSX makes your react code simpler and elegant.
- JSX ultimately transpiles to pure JavaScript which is understood by the browsers.

## JSX Differences
- Class replaced by className
- for replaced by htmlFor
- camelCase property naming convention
    - onclick replaced by onClick
    - tabindex replaced by tabIndex

## Props
- Props is just an object that contains the attributes and their vaules which has been passed from the parent component.
- Props are immutable meaning their values can not be change.
    - Reserved Children Property - sometimes it is possible you might not have an idea as to what content is being pass in but you want to render that unknown content. To do this specifly the content between the opening and closing tag of the component and retrieving it using the reserved children property.

## Props Vs State
- Props get passed to the component 
    - Ex: Function parameters
- Props, because a parent usually passes down the props to the child component, Props are immutable the parent owns the props and can't be changed by the children
- Props, functional components props can be accessed using the props parameter and in Class component props can be accessed using this.props

- State is managed within the component
    - Ex: Variables delcared in the function body
- State is managed within the component and hence the component has full control to change the state
- State, useState Hook - Functionals component and uses this.state - Class components 
- State is nothing but an object that is privately maintained inside a component
- State can influence what is rendered in the browser
- State can be changed within the component

## setState
- Always make use of setState and never modify the state directly
- Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.

## Conditional Rendering
- Hide/Show HTML based on a certain condition
- 4 ways fo approach
    1) if/elese
    2) Elemnent Variables
    3) Ternery Conditional Operator (Best Approach to follow)
    4) Short Circuit Operator

## Lists and Keys
- A 'key' is a special string attribute you need to include when creating lists of elements 
- Keys give the elements a stable identity
- Keys help React identify which items have changed, are added, or removed
- Help in efficient update of the UI

## Index as Key
- When to use index as key?
    1. The items in your list do not have an unique id.
    2. The list is a static list and will not change.
    3. The list will never be reordered or filtered.

## Styling React Components
1. CSS stylesheets
2. Inline styling
3. CSS Modules
4. CSS in JS Libaries(Style Components)

## Lifecycle Methods
- 4 phase
    1. Mounting - When an instance of a component is being created and inserted into the DOM. 4 methods to Mounting phase
        1. constructor
        2. static getDerviedStateFromProps
        3. render
        4. componentDidMount
    2. Update - When a component is being re-rendered as a result of changes to either its props or state. 5 methods to Update phase
        1. static getDerviedStateFromProps
        2. shouldComponentUpdate
        3. render
        4. getSnapShotBeforeUpdate
        5. componentDidUpdate
    3. Unmounting - When a component is being remove from the DOM. 1 method to Unmounting
        1. componentWillUnmount
    4. Error Handling - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component. 2 method to Error Handling
        1. static getDerivedStateFromError
        2. componentDidCatch
     