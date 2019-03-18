// Conditional Rendering (Elemnent Variables)
// in this approach you use JavaScript variables to store elements 
// this will help conditionally render the entire component or parts of the component as well 
import React, { Component } from 'react'

class UserGreetingElementVariables extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true 
      //  uncomment to see 'Welcome Dwight' being render
      //  isLoggedIn: false
    }
  }
  
  render() {
    // 1) delcare a variable inside the render method 
    // 2) store the appropiate element in this variable based on the condition
    // so message is the variable which stores the element to be render and hence this is the element variable approach
    let message 
    if (this.state.isLoggedIn) {
      message = <div>Welcome Jimmy Crack Corn</div>
    } else {
      message = <div>Welcome Dwight</div>
    }
    return (
      <div>
        <h3>{message}</h3>
      </div>
    )
  }
}

export default UserGreetingElementVariables
