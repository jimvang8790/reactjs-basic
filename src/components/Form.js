// Form Handing
// A control component
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'
      }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        //this will prevent the default behavior of form submission(stops it from referesing after submitting)
        event.preventDefault()
    }
    
//   render() {
//     return (
//     <form onSubmit={this.handleSubmit}>
//         <div>
//             <label>Username</label>
//             <input 
//                 type="text" 
//                 value={this.state.username} 
//                 onChange={this.handleUserNameChange}
//             />
//         </div>
//         <div>
//             <label>Comments</label>
//             <textarea 
//                 value={this.state.comments} 
//                 onChange={this.handleCommentsChange}
//             />
//         </div>
//         <div>
//             <label>Topic</label>
//             <select value={this.state.topic} onChange={this.handleTopicChange}>
//                 <option value="react">React</option>
//                 <option value="angular">Angular</option>
//                 <option value="vue">Vue</option>
//             </select>
//         </div>
//         <button>Submit</button>
//     </form>
//     )
//   }

//   code clean up
    render() {
        const{username, comments, topic} = this.state
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={this.handleUserNameChange}
                />
            </div>
            <div>
                <label>Comments</label>
                <textarea 
                    value={comments} 
                    onChange={this.handleCommentsChange}
                />
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
        )
    }
}

export default Form
