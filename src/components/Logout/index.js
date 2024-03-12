// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {onClick, condition} = this.props
    if (condition === true) {
      return (
        <button className="button" onClick={onClick}>
          Logout
        </button>
      )
    }
    return null
  }
}

export default Logout
