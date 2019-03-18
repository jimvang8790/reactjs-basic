// Conditional Rendering (Ternery Conditional Operator)
// the benefit of this approach is it can be use inside the JSX
// this approach is the approach you would want to follow most of the time. Keeps the code simple and readable.
import React, { Component } from 'react'

class UserGreetingTerneryConditionalOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
         //  uncomment to see 'Welcome Michael' being render
        //  isLoggedIn: false
      }
    }
    
  render() {
    return (
        // 1) within the return, use the conditional operator
        // the 'this.state.isLoggedIn' is evaluated to either true/false 
        this.state.isLoggedIn ? 
      <div>
        <h3>Welcome JimmBoi</h3>
      </div> : 
      <div>
          <h3>Welcome Michael</h3>
      </div>
    )
  }
}

export default UserGreetingTerneryConditionalOperator
