// 1st approach to styling React Components
import React from 'react'
import './myStylesPropsState.css'

function StyleSheetPropsState(props) {
    // let className = to props.secondary '?' is the conditional operator and if it is ture set className=secondary if not set className equal to an empty string
    let className = props.secondary ? 'secondary' : ''
  return (
    <div>
      <h3 className={`${className} font-xl`}>StyleSheet</h3>
    </div>
  )
}

export default StyleSheetPropsState
