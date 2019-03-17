// Class Components
// When creating a Class component, import 2 imports
// Import React and the Component class from react
import React, {Component} from 'react';

// define the class
// for a class to become a react component do 2 steps
// 1) it should extends the component class from react 
// 2) the class has to implement a render() method which will return null or some HTML
// class Welcome extends Component {
//     render() {
//         return <h3>Hello Vang</h3> // This is JSX not HTML
//     }
// }

// Props with Class Components
// Accessing the props with the 'this' keyword
class Welcome extends Component {
    render() {
        return (
            <h3>Welcome {this.props.name} also know as {this.props.heroName}</h3>
        )
    }
}

// Destructuring props and state
// class Welcome extends Component {
//     render() {
//         const {name, heroName} = this.props
//         return (
//             <h3>Welcome {name} also know as {heroName}</h3>
//         )
//     }
// }

// Number of state properties you can destructure them in a similar way
// class Welcome extends Component {
//     render() {
//         const {name, heroName} = this.props
//         const {state1, state2} = this.state
//         return (
//             <h3>Welcome {name} also know as {heroName}</h3>
//         )
//     }
// }

export default Welcome