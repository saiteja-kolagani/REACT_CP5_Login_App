// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {message} = this.props
    if (message === false) {
      return <h1>Please Login</h1>
    }
    return <h1>Welcome User</h1>
  }
}

export default Message
