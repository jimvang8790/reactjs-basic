// Conditional Rendering (Short Circuit Operator)
// when you want to render something or nothing 
// so if isLoogedIn is true render 'Welcome Jimmi', if false render nothing
import React, { Component } from 'react'

class UserGreetingShortCircuitOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
         //  uncomment to see nothing being render
        //  isLoggedIn: false
      }
    }
    
  render() {
    return this.state.isLoggedIn && 
        <div>
            <h3>Welcome Jimmi</h3>
        </div>
  }
}

export default UserGreetingShortCircuitOperator
