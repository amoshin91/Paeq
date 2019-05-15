import React, { Component } from 'react'
import '../styles/Nav.css'
import '../styles/App.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {

    return(
      <nav>
        <div id="logo">
          <Link to='/project'>
            <img src="https://i.imgur.com/trF9Cpd.png" alt="" />
          </Link>
        </div>
        <div id="nav-links">
          <Link to='/about'>about</Link>
          <Link to='/project'>project</Link>
          <a href='https://medium.com/@amosshin/flatiron-school-final-project-day-1-paeq-is-born-bfb967f7e226'>blog</a>
        </div>
      </nav>
    )
  }
}

export default Nav

// <Link to='/signup'>sign up</Link>
