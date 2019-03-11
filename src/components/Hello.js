// JSX
import React from 'react';

// Create the function using JSX that returns what appears to be HTML
// Write in ES6

const Hello = () => {
    return (
        <div id='hello' className='dummyClass'>
            <h3>Hello CodeEvolution, with JSX</h3>
        </div>
    )
}

// Without JSX
// To help us do that the react library provides a createElement() method and at minium accepts 3 parameters
// 1) is a string which specifies the HTML tag to be render ex: 'div'
// 2) pass in an optional properties but for now we don't need any so use 'null'. This basically is an object of key value pairs that will be apply to the element.
// 3) is the children for the HTML element that is children for the div tag. Again for this ex we simply have the text 'Hello CodeEvolution'

// const Hello = () => {
//     return React.createElement(
//         'div', 
//         {id: 'hello', className: 'dummyClass'}, 
//         React.createElement(
//             'h3', 
//             null, 
//             'Hello CodeEvolution, no JSX'
//         )      
//     )
// }

export default Hello