import React from "react";
import IAZZAI_logo from '../images/iazzai.png'
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

// First a wrapper which contains title and then also contains text and logo rows.
// First row: text-card containing title and text. Then a picture is displayed next to it in the row.
// Second row: First the logos are displayed, then the title and text.
// This is styled using flexbox.
  render() {
    return (
      <div className="ia-container">
        <div className="ia-title"> <a href="https://www.iazzai.com/" target="_blank"><img src={IAZZAI_logo} className="ia-logo"/> </a> </div>
        <div className="ia-text">
        I am a co-founder of the startup IAZZAI, which is currently in the pre-incubator program for KTH Innovation.
        </div>
          <div className="ia-text">
            <div className="ia-text-title"> Hiring process, made easy </div>
            IAZZAI is a tool for analyzing interviews at the click of a button. Live interviews are recorded, and, with the help of AI models
            we generate reports, summaries, highlights of compatibilities, individual scoring, and much more. 
            As AI is prone to bias, we have developed a method of analyzing interviews which is verifiably unbiased.
          </div>
          <div className="ia-text">
            <div className="ia-text-title"> My Role </div>
            <ul className="ia-list-wrapper">
              <li><b>Full Stack Development.</b> Development of MVP, Backend infrastructure, Deployment of Microservices, Frontend Development.</li>
              <li><b>AI Development.</b> Fine-tuning LLM models, Database Integrations, Quality Assessment, Dockerization of Model Endpoints, Model Retraining.</li>
              <li><b>Business Development.</b> Continuous assessment of our product value and direction. 
              Gathering insights from customers to analyze requested features.</li>
              <li><b>Outreach.</b> Attending meetups, Pitching to potential customers and inverstors, Being one of the faces of the startup. </li>

            </ul>
          </div>
      </div>
    )
  }
}