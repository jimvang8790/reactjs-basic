// Functional Component
//  When creating a new component always import React
import React from 'react';

// function Greet() {
//     return <h1>Hello Jim</h1>
// }

//  Using ES6
// const Greet = () => <h3>Hello Jim</h3> // This is JSX not HTML

// Props
// 1) add a parameter to the functional component and call it props(can name this anything but the concention is to name it props)
// 2) use the prevoious parameter in the function body. Cosole.log the props parameter in the console
// 3) use the {props.'value'}
// const Greet = (props) => {
//     console.log(props)
//     return <h3>Hello {props.name}, or should I say {props.heroName}.</h3>
// }

// Props with Reserved Children Property
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Hello {props.name}, or should I say {props.heroName}.</h3>
            {props.children}
        </div>
    )
}

// This is a name export. 
// Using this no need to write export default Greet
// export const Greet = () => <h1>Hello Jim</h1>

// Now export it, to use in App.js
export default Greet 