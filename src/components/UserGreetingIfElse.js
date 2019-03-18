// Conditional Rendering (if/else) hiding/showing html based on certain condition
import React, { Component } from 'react'

class UserGreetingIfElse extends Component {
    // 1) add constructor with the snippet rconst
    // what we want is the message to be conditionally render based on the isLoggedIn state
    // if logged in the message Welcome JimBag should be display
    // if not logged in the message Welcome Geuss should be display
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
        //  uncomment to see 'Welcome Geuss' being render
        //  isLoggedIn: false
      }
    }
    
  render() {
    // 2) add the if/else condition
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h3>Welcome JimBag</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Welcome Geuss</h3>
        </div>
      )
    }

    // CAN NOT use the if/else condition on the message being display
    // if/else statment don't work inside the JSX b.c JSX is just syntactic sugar for function calls and object contruction
    // adding if/else statements within the JSX is not valid 
    // this is a reason why we have if/else statement outside the JSX and the entire return state containing the JSX is placed inside the if/else block 

    // return (
    //     <div>
    //         <div>
    //             <h3>Welcome JimBag</h3>
    //         </div>
    //         <div>
    //             <h3>Welcome Geuss</h3>
    //         </div>
    //     </div>
    // )
  }
}

export default UserGreetingIfElse
