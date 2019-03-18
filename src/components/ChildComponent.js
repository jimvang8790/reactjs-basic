// Methods as props (Child communicating to Parent)
// Child component
// using a function component unlike in the parent component using a class component, b.c. we are not using state in this component and functional component are more simiplar 
// snippet is rfce instead of rce
// basily the child component calls a parent component method which is done using props. The only difference this time is we pass the mehtod itself as a prop to the child component
// this is how you pass methods as props in react components, 
// 1) in the parent component define the method
// 2) on the child component tag pass the method as a prop
// 3) in the child component access the method using the props object
// 4) if at all you have to pass a parameter use the arrow function  
import React from 'react'

// Uncomment this out for the non arrow function way
// Add props as a paramenter
// after adding the attribute(greetHandler) to the child component in the parent component, call props.greetHandler
// remember to add props as a parameter
// function ChildComponent(props) {
//   return (
//     <div>
//       <button onClick={props.greetHandler}>Greet Parent</button>
//     </div>
//   )
// }

// Uncomment this out to see the arrow function way
// Now let's pass a paramenter when calling the parent method from the child component using the arrow function in the return statement
// Arrow function/syntax is the simplest way to pass paramenters from child component to the parent component
// now we can pass any numbers of parameters to the greetHandler, but for now pass in the string 'child'
// we have now successfully passed a parameter from the child to the parent
function ChildComponent(props) {
    return (
      <div>
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
      </div>
    )
  }

export default ChildComponent
