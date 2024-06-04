import React from "react";
import {HiOutlineMail} from 'react-icons/hi'
import GITHUB from '../images/github.png'
import LINKEDIN from '../images/linkedin.png'

class Home extends React.Component {

	constructor(props) {
		super(props)
	}

// alert is the "Copied!" alert that shows up when clicking the email.
// When clicked, the email text is copied.
// Then alert is visible by adding css.
// Then a new alert is created and replaces the original
// This allows the alert to keep appearing if clicked again
  copyContent() {
    const email = document.getElementById("email");
    const alert = document.getElementById("alert")
    navigator.clipboard.writeText(email.innerText)
    alert.className += " fade-out"
    var newAlert = alert.cloneNode(true);
    alert.parentNode.replaceChild(newAlert, alert);
  }


  // Render home-wrapper which contains name, titles, and short description.
  // Then render clickable links and click-to-copy email.
  render() {
    return (
      <div className="home-container"> 
        <div className="home-title-1">
          Basam Al Nashea
        </div>
        <div className="home-title-2">
          Data Scientist - AI Developer - Full Stack Developer
        </div>
        <div className="home-title-3">
          I'm a Data Scientist with years of experience. 
          Constantly exploring new technologies and staying up-to-date on the latest developments in AI.
          Currently working as a consultant and developing some applications in my spare time.
        </div>
        <div className="home-title-4">
          <div className="center-wrapper-align flex-column">
            <div className="home-copy" id="alert">Copied!</div>
            <span id="email" className="home-title-5 hover-orange" onClick={this.copyContent}> bessomi@gmail.com </span>
          </div>
        </div>
        <div className="home-title-6">
          <a href="https://www.linkedin.com/in/basam-al-nashea-9ba66212b/" target="_blank"> <img src={LINKEDIN} className="home-logo hover-orange" /> </a>
          <a href="https://github.com/Bessomi" target="_blank"> <img src={GITHUB} className="home-logo hover-orange" /> </a>
          <a className="home-link center-wrapper-align hover-orange" href="https://github.com/Bessomi/bessomi.github.io" target="_blank"> Source code </a> 
        </div>
      </div>
    )
  }
}

export default Home