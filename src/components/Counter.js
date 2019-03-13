// setState
import React, { Component } from 'react'

class Counter extends Component {

// keeping track of the counter value, so initialize state in the constructor 
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // setState, never modifly the state directly with this.state, only in the constructor 
        // setState will let React know to re-render the component in the DOM
        // calls to setState are asynchronous, meaning console.log is being called before the state is actually set. To handle this pass in a callback function as the second parameter to the set state method 
        // so now the setState method has two parameters
        // 1st is the state object 
        // 2nd is the the callback function, an arrow function
        this.setState({
            // state object
            count: this.state.count + 1
        }, () => { // this is the callback function, and whenever you need to execute some code after the state has been change place code here
            // callback function
                console.log('Callback value', this.state.count)
            }
        )
        console.log('State Object',this.state.count)
    }

    // This should have incremented by 5, but why not?
    // React may group multiple setState calls into a single update for better performace and the updated value doesn't carry over between the different calls
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    // So to whenever you have to update the state based on the previous state, you need to pass a function as an argument to setState method instead of passing in an object
    // And now incrementFive() will increase by 5
    // un-comment the function below to see
    // increment() {
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1
    //     }))
    //     console.log('State Object',this.state.count)
    // }

  render() {
    return (
      <div>
        <h3>Count - {this.state.count}</h3>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>IncrementFive</button>
      </div>
    )
  }
}

export default Counter
