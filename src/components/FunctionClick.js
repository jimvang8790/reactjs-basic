// Event Handling in Functional Component
import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('functional component button clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
