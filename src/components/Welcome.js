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

export default Welcome