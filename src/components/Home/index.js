// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  loginFunction = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <Message message={isLoggedIn} />
          <Login onClick={this.loginFunction} condition={isLoggedIn} />
          <Logout onClick={this.loginFunction} condition={isLoggedIn} />
        </div>
      </div>
    )
  }
}

export default Home
