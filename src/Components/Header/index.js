import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {IoMdGrid} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <IoMdGrid className="logo" />
          <p>IndigoLearn</p>
        </div>
        <ul className="header-buttons">
          <Link to="/why-choose-us" className="link">
            <li>Why Choose Us</li>
          </Link>
          <Link to="/what-you-learn" className="link">
            <li>What We Teach</li>
          </Link>
          <Link to="/placements" className="link">
            <li>Placements</li>
          </Link>
          <Link to="/kick-start" className="link">
            <li>Get Started</li>
          </Link>
        </ul>
        <div className="login-container">
          <div className="login-icon-background">
            <FaUserAlt className="login-logo" />
          </div>
          <button type="button" className="login-button">
            Login/Sign Up
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
