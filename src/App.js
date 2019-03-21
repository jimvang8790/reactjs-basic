import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // Import Greet functional component from the Greet.js file in the Components folder 
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetingIfElse from './components/UserGreetingIfElse';
import UserGreetingElementVariables from './components/UserGreetingElementVariables';
import UserGreetingTerneryConditionalOperator from './components/UserGreetingTerneryConditionalOperator';
import UserGreetingShortCircuitOperator from './components/UserGreetingShortCircuitOperator';
import NameList from './components/NameList';
// import Person from './components/Person'; no need to import this anymore since we import it in NameList.js file
import StyleSheet from './components/StyleSheet';
import StyleSheetPropsState from './components/StyleSheetPropsState';
import InlineStyling from './components/InlineStyling';
// import './appStyles.css'; // importing from a regular style sheet
// import styles from './appStyles.module.css'; // importing from a module style sheet
import Form from './components/Form';

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

        {/* Event Handling */}
        <h1>Event Handling for Functional Component</h1>
        <FunctionClick/>

        {/* Event Handling */}
        <h1>Event Handling for Class Component</h1>
        <ClassClick/>

        {/* Binding Event Handlers */}
        <h1>Binding Event Handlers</h1>
        <EventBind/>

        {/* Methods as props (Child component communicating to Parent component) Event Handling */}
        <h1>Methods as props (Child component communicating to Parent component) Event Handling</h1>
        <ParentComponent/>

        {/* Conditional Rendering (if/else) */}
        <h1>Conditional Rendering (if/else)</h1>
        <UserGreetingIfElse/>

        {/* Conditional Rendering (ElementVariables) */}
        <h1>Conditional Rendering (ElementVariables)</h1>
        <UserGreetingElementVariables/>

        {/* Conditional Rendering (Ternery Conditional Operator) */}
        <h1>Conditional Rendering (Ternery Conditional Operator)</h1>
        <UserGreetingTerneryConditionalOperator/>

        {/* Conditional Rendering (Short Circuit Operator) */}
        <h1>Conditional Rendering (Short Circuit Operator)</h1>
        <UserGreetingShortCircuitOperator/>

        {/* List Rendering Name List */}
        <h1>List Rendering Name List</h1>
        <NameList/>
        
        {/* no need to render this anymore since we render it in NameList.js file */}
        {/* List Rendering Persons List */}
        {/* <h1>List Rendering Persons List</h1>
        <Person/> */}

        {/* 1st Approach to styling React Component */}
        <h1>1st Approach to styling React Component</h1>
        <StyleSheet/>

        {/* 1st Approach to styling React Component using Props and States */}
        <h1>1st Approach to styling React Component using Props and States</h1>
        <StyleSheetPropsState secondary={true}/>

        {/* 2nd Approach to styling React Component with Inline Styling */}
        <h1>2nd Approach to styling React Component with Inline Styling</h1>
        <InlineStyling/>

        {/* 3rd Approach to styling React Component with Module */}
        <h1>3rd Approach to styling React Component with Module</h1>
        <h3>Getting an console error, have Doua look into this</h3>
        {/* <h1 className="error">Regular Style (Error)</h1> */}
        {/* <h1 className={styles.success}>Module Style (success)</h1> */}

        {/* Form Component */}
        <h1>Form Component</h1>
        <Form/>
      </div>
    );
  }
}

export default App;
