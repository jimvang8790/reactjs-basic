// Methods as props (Child communicating to Parent)
// Parent component
// basily the child component calls a parent component method which is done using props. The only difference this time is we pass the mehtod itself as a prop to the child component
// this is how you pass methods as props in react components, 
// 1) in the parent component define the method
// 2) on the child component tag pass the method as a prop
// 3) in the child component access the method using the props object
// 4) if at all you have to pass a parameter use the arrow function 
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'; // import the child component here

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
    //   1st defind parentName
      this.state = {
         parentName: 'Parent'
      }
      
    //   remember, since we are using 'this' we need to bind 'this' method (3rd approach to bind event handlers)
    this.greetParent = this.greetParent.bind(this)
    }

    // Uncomment this out for the non arrow function way
    // 2nd greet parent
    // greetParent() {
    //     // not ES6
    //     // alert('Hello' + this.state.parentName)
    //     // ES6 way
    //     alert(`Hello ${this.state.parentName}`)
    // }

    // Uncomment this out to see the arrow function way
    // Now let's pass a paramenter when calling the parent method from the child component using the arrow function in the return statement
    // Arrow function/syntax is the simplest way to pass paramenters from child component to the parent component
    // now we can pass any numbers of parameters to the greetHandler, but for now pass in the childName
    // we have now successfully passed a parameter from the child to the parent
     greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        {/* Now include the child component here */}
        {/* also import the child component at the top */}
        {/* 3rd, add the attribute(greetHandler) to the child component */}
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
