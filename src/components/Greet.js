// Functional Component
//  When creating a new component always import React
import React from 'react';

// function Greet() {
//     return <h1>Hello Jim</h1>
// }

//  Using ES6
const Greet = () => <h3>Hello Jim</h3> // This is JSX not HTML

// This is a name export. 
// Using this no need to write export default Greet
// export const Greet = () => <h1>Hello Jim</h1>

// Now export it, to use in App.js
export default Greet 