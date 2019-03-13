import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // Import Greet functional component from the Greet.js file in the Components folder 
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Functional Component */}
        {/* Add the Greet component in a custom custom HTML tag */}
        {/* These HTML are really JSX */}
        <h1>Funcational Components</h1> 
        <Greet></Greet>

        {/* Class Component */}
        {/* And if there is nothing in the custom tag, can write as a self closing tag */}
        <Greet />

        {/* Props */}
        <h1>Props</h1>
        {/* To specify a name property add the name attribute to the attribute we assign the value */}
        {/* To retrieve these values in the Greet component requires a 2 step process in the Greet.js file */}
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>  {/* reserved children property, between the tags */}
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/>

        {/* Props with a Class Component */}
        <h1>Props with Class Component</h1>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>

        {/* Class Components */}
        <h1>Class Component</h1>
        <Welcome />
        
        {/* JSX */}
        <h1>JSX</h1>
        <Hello />

        {/* State */}
        <h1>State</h1>
        <Message/>

        {/* setState */}
        <h1>setState</h1>
        <Counter/>
      </div>
    );
  }
}

export default App;
