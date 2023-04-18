import React from "react";

export default class Counsil extends React.Component {

	constructor(props) {
		super(props)

	}

// Render wrapper with cards containing title and description.
  render() {
    return (
      <div className="council-container">
        <div className="council-title"> Mathematical Student Council </div>
        <div className="council-text-1">
          The Mathematical Student Council at Stockholm University is an official student association tied to the 
          mathematics department.
          I was a member for many years and Chairman from March 2020 to August 2021. 
          We promoted the quality of education for the students and fostered a better learning environment in the department.
        </div>
        <ul className="council-text-2">
        <div className="council-text-2-title">Notable achievements and tasks: </div>
          <li>Organized a mathematics competition in 2019.</li>
          <li>Successfully aided the department in transition to remote education during pandemic. </li>
          <li>Obtained university grant to upgrade the quality of the student area. </li>
          <li>Attended departmental board meetings to voice students' concerns.</li>
          <li>Elected student task force to evaluate the current state of courses and programs. </li>
          <li>Organized social events for students to get acquainted. </li>
        </ul>  
      </div>
    )
  }


}