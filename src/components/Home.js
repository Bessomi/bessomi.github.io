import React from "react";

class Home extends React.Component {

	constructor(props) {
		super(props)

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
          <div> 
            Contact me at: 
            <span className="home-title-5"> bessomi@gmail.com </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Home