import React, { Component } from 'react'
import '../styles/Footer.css'
import '../styles/App.css'

class Footer extends Component {
  render() {
    return (
      <footer id="flex-footer">
        <div id="footer-left">
          <ul>
            <li>Google Cloud Vision API</li>
            <li>AWS S3</li>
            <li>AWS API Gateway</li>
          </ul>
        </div>
        <div id="footer-center">
          <a href="https://github.com/amoshin91/Paeq">
            <img src="https://i.imgur.com/seBIpzR.png" alt="github"/>
          </a>

          <a href="https://medium.com/@amosshin/flatiron-school-final-project-day-1-paeq-is-born-bfb967f7e226">
            <img src="https://imgur.com/QjexFRt.png" alt="medium"/>
          </a>

          <a href="https://www.linkedin.com/in/amosshin/">
            <img src="https://i.imgur.com/AXUFl2g.png" alt="linkedin"/>
          </a>

        </div>
        <div id="footer-right">
          <p>Developed by:</p>
          <h5>Amos Shin</h5>
        </div>
      </footer>
    )
  }
}

export default Footer
