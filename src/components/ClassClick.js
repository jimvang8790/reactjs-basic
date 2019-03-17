// // Event Handling in Class Component
import React, { Component } from 'react'

// for event handling in class component, onClick event will be handle with "this" key word
export class ClassClick extends Component {
    clickHandler() {
        console.log('class component button clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
