// State
import React, { Component } from 'react'

// For a State Component to change this message
// 1) create a state object and initialize it and is usually done inside a class constructor ex: constructor() {super()this.state = {}} and initialize a property
// 2) bind this state value in the render function similar to props
// 3) add jsx/html for a button element 
// 4) final step is to listen to the click event on this button and change the message 
class Message extends Component {

    // step 1
    constructor() {
        super() 
        this.state = {
            // initialize the property
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        // to change the state of the component, call the set state method with this.setState()
        this.setState({
            // this except an opject
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            // step 2
            <div>
                <h3>{this.state.message}</h3>
                {/* step 3  and step4 is adding the onClick*/}
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message