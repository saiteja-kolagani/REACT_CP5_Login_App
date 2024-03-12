// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {onClick, condition} = this.props
    if (condition === false) {
      return (
        <button className="button" onClick={onClick}>
          Login
        </button>
      )
    }
    return null
  }
}

export default Login
