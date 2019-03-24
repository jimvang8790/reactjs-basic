// Mounting phase Lifecycle
import React, { Component } from 'react'
import MountingLifecycleB from './MountingLifecycleB';

class MountingLifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
      console.log('MountingLifecycleA constructor')
    }

    static getDerviedStateFromProps(props, state) {
        console.log('MountingLifecycleA getDerviedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('MountingLifecycleA componentDidMount ')
    }
    
  render() {
      console.log('MountingLifecycleA render')
    return (
      <div>
          <div>
            <h3>MountingLifecycleA</h3>
          </div>
          {/* Adding MountingLifecycleB here */}
          <MountingLifecycleB/>
      </div>
    )
  }
}

export default MountingLifecycleA
