// 2nd approach to styling React Component
import React from 'react'

// step 1, create a new object called heading 
const heading = {
    fontSize: '72px',
    color: 'pink'
}

function InlineStyling() {
  return (
    <div>
      <h3 style={heading}>Inline Styling</h3>
    </div>
  )
}

export default InlineStyling
