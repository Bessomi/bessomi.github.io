import React from "react";
import LANG1 from '../images/lang1.png'
import REACT_logo from '../images/react.png'
import NGINX from '../images/nginx.png'
import NODE from '../images/node.png'
import PYTHON from '../images/python.png'
import MONGODB from '../images/mongodb.png'
import DOCKER from '../images/docker.webp'


export default class Home extends React.Component {

	constructor(props) {
		super(props)

	}

  render() {
    return (
      <div className="lang-container">
        <div className="lang-title"> Language Application </div>
        <div className="lang-box">
          <div className="lang-text">
            <div className="lang-text-title"> Reading with AI </div>
            Since the middle of 2022 I've been learning French, and I've noticed that there aren't many tools available
            that make use of the recent advances in AI; language learning is a step behind.
            So I've been developing a web-application that helps users to read any input text, with the goal
            of motivating people to learn by engaging in ones favourite reading material, whatever that may be! 
            This is a continuous project of mine that I fiddle on during my spare time.
          </div>
          <img src={LANG1} className="lang-pic-1"/>
        </div>
        <div className="lang-box lang-box-2">
          <div className="center-wrapper-align">
            <div className="lang-pic-2">
            <div className="lang-pic-2-logo-row">
              <img src={REACT_logo} className="lang-pic-2-logo"/>
              <img src={PYTHON} className="lang-pic-2-logo"/>
              <img src={NODE} className="lang-pic-2-logo"/>
            </div>
            <div className="lang-pic-2-logo-row">
              <img src={MONGODB} className="lang-pic-2-logo"/>
              <img src={DOCKER} className="lang-pic-2-logo"/>
              <img src={NGINX} className="lang-pic-2-logo"/>
            </div>
            </div>
          </div>
          <div className="lang-text lang-text-2">
            <div className="lang-text-title"> Full-Stack application </div>
              For the frontend I use Reactjs, working mainly with class components. For the backend I use:
              Nodejs including Express.js for the RestAPI, mongoDB for a NoSQL database, and Python for the Deep Learning models.
              Finally, for hosting I use Docker and Docker Compose for the containerization architechture, and NGINX for routing and serving.
          </div>
        </div>
      </div>
    )
  }
}