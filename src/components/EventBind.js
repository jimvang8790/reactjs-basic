// Event Binding Handlers
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello!'
      }
    // 3rd approach, bind the event handler in the constructor 
    // B.C. the binding happens once in the constructor this is better compared to binding in the render methods
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    // 4th approach
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }
    
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* 1st approach is to bind to the clickHandler */}
          {/* this opition works fine every update to the state will cause the component to re-render, this in turn will generate a brand new event handler on every render */}
          {/* bad approach due to performance implications */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* 2nd approach is to use arrow function in the render method */}
          {/* no need for curly braces or the return keyword for the arrow function body because the function body is a single statement */}
          {/* also notice we are calling the event handler(this.clickHandler()) and returning that value that is parentheses is required in this approach */}
          {/* Probably the easiest way to pass parameters if your code doesn't involve 3 rendering nested children component, this approach is a good approach */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

          {/* 3rd approach, which is the most common and official react dowcumentation */}
          {/* this approach deals with binding the event handler(this.clickHandler()) in the constructor as opposed to binding in the render menthod */}
        <button onClick={this.clickHandler}>Click</button>

          {/* 4th approach is to use an arrow function as a class property */}
          {/* basily change the way you define your method in the class */}
          {/* have to uncomment the event handler in the constructor and the clickHandler() function to use approach 4 */}
          {/* the second best approach to the 3rd approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}


      </div>
    )
  }
}

export default EventBind
