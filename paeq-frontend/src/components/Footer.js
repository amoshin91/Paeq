import React, { Component } from 'react'
import '../styles/Footer.css'
import '../styles/App.css'

class Footer extends Component {
  render() {
    return (
      <footer id="flex-footer">
        <div id="footer-left">
          some stuff
        </div>
        <div id="footer-center">
          <a href="https://github.com/amoshin91/Paeq">
            <img src="" alt="github"/>
          </a>

          <a href="https://medium.com/@amosshin/flatiron-school-final-project-day-1-paeq-is-born-bfb967f7e226">
            <img src="" alt="medium"/>
          </a>

          <a href="https://www.linkedin.com/in/amosshin/">
            <img src="" alt="linkedin"/>
          </a>

        </div>
        <div id="footer-right">
          <h5>Amos Shin</h5>
        </div>
      </footer>
    )
  }
}

export default Footer
