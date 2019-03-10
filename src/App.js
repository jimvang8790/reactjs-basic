import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // Import Greet functional component from the Greet.js file in the Components folder 

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Add the Greet component in a custom custom HTML tag */}
        <Greet></Greet>
        {/* And if there is nothing in the custom tag, can write as a self closing tag */}
        <Greet />
      </div>
    );
  }
}

export default App;
