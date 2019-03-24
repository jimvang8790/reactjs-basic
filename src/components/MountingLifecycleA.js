// Mounting phase Lifecycle
// Updating phase Lifecycle
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

    shouldComponentUpdate() {
      console.log('MountingLifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('MountingLifecycleA getSnapshotBefore')
      return null
    }

    componentDidUpdate() {
      console.log('MountingLifecycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name: 'Codevolution'
      })
    }
    
  render() {
      console.log('MountingLifecycleA render')
    return (
      <div>
          <div>
            <h3>MountingLifecycleA</h3>
          </div>
          <button onClick={this.changeState}>Change State</button>
          {/* Adding MountingLifecycleB here */}
          <MountingLifecycleB/>
      </div>
    )
  }
}

export default MountingLifecycleA
