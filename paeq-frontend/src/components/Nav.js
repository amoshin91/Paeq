import React, { Component } from 'react'
import '../styles/Nav.css'
import '../styles/App.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return(
      <nav>
          <Link to='/about'>about</Link>
          <Link to='/project'>project</Link>
          <Link to='/signup'>sign up</Link>
      </nav>
    )
  }
}

export default Nav
