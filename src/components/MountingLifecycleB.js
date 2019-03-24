// Mounting phase Lifecycle with child component
// Import MountingLifecycleB into the MountingLifecycleA file
import React, { Component } from 'react'

class MountingLifecycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Vishwas'
        }
        console.log('MountingLifecycleB constructor')
      }
  
      static getDerviedStateFromProps(props, state) {
          console.log('MountingLifecycleB getDerviedStateFromProps')
          return null
      }
  
      componentDidMount() {
          console.log('MountingLifecycleB componentDidMount ')
      }
      
    render() {
        console.log('MountingLifecycleB render')
      return (
        <div>
          <h3>MountingLifecycleB</h3>
        </div>
      )
    }
  }

export default MountingLifecycleB

