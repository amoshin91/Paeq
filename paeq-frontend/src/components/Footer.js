import React, { Component } from 'react'
import '../styles/Footer.css'
import '../styles/App.css'

class Footer extends Component {
  render() {
    return (
      <footer className="flex">
        <div id="footer-left">
          some stuff
        </div>
        <div id="footer-center">
          more stuff
        </div>
        <div id="footer-right">
          even more stuff
        </div>
      </footer>
    )
  }
}

export default Footer
