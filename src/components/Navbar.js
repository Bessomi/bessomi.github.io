import React from "react";
import profile_pic from '../images/pic1.jpg'

class Navbar extends React.Component {

    constructor(props) {
    super(props)
    this.pages = [
      {display: 'Work History', value: 'work'},
      {display: 'Education', value: 'edu'},
      {display: 'Language App', value: 'lang'},
      {display: 'Master Thesis', value: 'thesis'},
      {display: 'Student Council', value: 'council'}
    ];


    this.state = {
      active: 'home' 
    }
  }

  handleClick(page_value) {
    this.props.handlePageClick(page_value)
    this.setState({
      active: page_value
    })
    

  }

  renderbutton(page, key) {
    return( 
      <div value = {page.value}
        className = {this.state.active == page.value ? 'navbtn-clicked' : 'navbtn'} 
        key = {key}
        onClick = {()=> this.handleClick(page.value)}> {page.display}  </div>
    );

  }
  

  render() {
    return (
      <div className='nav flex flex-col h-screen'>
        <div className="logo-container">
          <img src={profile_pic} className="logo" onClick={()=>this.handleClick('home')}/>
        </div>
        {this.pages.map((value, index) => {
        return this.renderbutton(value, 'navbtn' + index)
       })}
       </div>
    )
  }
}

export default Navbar