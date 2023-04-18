import React from "react";
import MONOK from '../images/monok_logo.png'
import SU from '../images/su_logo.png'
import KTH from '../images/kth_logo.png'
import TELE2 from '../images/tele2_logo.jpg'

export default class Work extends React.Component {

	constructor(props) {
		super(props)
	}

// First is a wrapper that centralizes content. Then a wrapper for all the work cards.
// Then title of page.
// Then each work-card is rendered.
// Work-cards consist of title, company logo (clickable link to website), role title, duration of work.
// Finally a text description of the work.
// This component uses a grid layout.
  render() {
    return (
      <div className="center-wrapper">
        <div className="work-container">
          <div className="work-title">Previous Work</div>
          <div className="work-logo-box work-itemA1"> <a href="https://www.monok.com/" target="_blank"><img src={MONOK} className="work-logo"/> </a> </div>
          <div className="work-text work-itemA2">
            <div className="work-text-title"><div className="work-text-title-first">Data Science Advisor</div> <div className="work-text-title-last">Mar 2019 - Aug 2021</div></div>
            Monok is an AI-startup that generates ready-to-publish news articles and feeds. 
            My role was to advise on mathematical models, construct tools to analyse data, and preprocess data for use within Deep Learning.
            I learned a great amount about constructing end-to-end solutions that utilize the latest in Natural Language Processing.
          </div>
          <div className="work-logo-box work-itemB1"> <a href="https://www.su.se/" target="_blank"> <img src={SU} className="work-logo"/> </a></div>
          <div className="work-text work-itemB2">
            <div className="work-text-title"><div className="work-text-title-first">Teaching Assistant</div> <div className="work-text-title-last">Jan 2021 - Aug 2021</div></div>
            I was advised by one of my professors to apply for this position and I worked here during spring and summer semesters of 2021.
            Me and the other TA's held problem-solving sessions in Linear Algebra and Calculus, we also got to grade assignments and exams.
          </div>
          <div className="work-logo-box work-itemC1"> <a href="https://www.kth.se/" target="_blank"> <img src={KTH} className="work-logo"/> </a></div>
          <div className="work-text work-itemC2">
            <div className="work-text-title"><div className="work-text-title-first">Teaching Assistant</div> <div className="work-text-title-last">Feb 2019 - Aug 2020</div></div>
            At KTH I got to hold seminars for undergraduate students where the aim is to get them used to discussing mathematics in a structured way.
            They would get sheets of questions which they would discuss in groups and then present. I would also hold exercise sessions in Linear Algebra and Calculus. 
            Helping the students realize that math can be easy was a very rewarding experience.
          </div>
          <div className="work-logo-box work-itemD1"> <a href="https://www.tele2.se/" target="_blank"> <img src={TELE2} className="work-logo"/> </a> </div>
          <div className="work-text work-itemD2">
            <div className="work-text-title"><div className="work-text-title-first">Network Planner</div> <div className="work-text-title-last">Dec 2018 - Jul 2019</div></div>
            Through a classmate I was advised to apply for the position of Network Planner at ComHem (which later merged with the telecom company Tele2).
            There I got to work with digitalization and general maintenance of their network structure. Day to day tasks varied, and I often had to hop between them depending on which had the highest priority.
          </div>
        </div>
      </div>
    )
  }
}