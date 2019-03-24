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

      shouldComponentUpdate() {
        console.log('MountingLifecycleB shouldComponentUpdate')
        return true
      }
  
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('MountingLifecycleB getSnapshotBefore')
        return null
      }
  
      componentDidUpdate() {
        console.log('MountingLifecycleB componentDidUpdate')
      }
      
    render() {
        console.log('MountingLifecycleB render')
      return (
        <div>
          
        </div>
      )
    }
  }

export default MountingLifecycleB

