import React from "react";
import {HiOutlineMail} from 'react-icons/hi'
import GITHUB from '../images/github.png'
import LINKEDIN from '../images/linkedin.png'

class Home extends React.Component {

	constructor(props) {
		super(props)
	}

  copyContent() {
    const email = document.getElementById("email");
    const alert = document.getElementById("alert")
    navigator.clipboard.writeText(email.innerText)
    alert.className += " fade-out"
    var newAlert = alert.cloneNode(true);
    alert.parentNode.replaceChild(newAlert, alert);
  }

  render() {
    return (
      <div className="home-container"> 
        <div className="home-title-1">
          Basam Al Nashea
        </div>
        <div className="home-title-2">
          Data Scientist - Analyst - Developer
        </div>
        <div className="home-title-3">
          I'm a recent graduate of the Master's program of Mathematics at KTH and Stockholm University.
          I've previously enjoyed working within Data Science and assisting in University courses,
          as well as developing a Full-Stack Application of mine.
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