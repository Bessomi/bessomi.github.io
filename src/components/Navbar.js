import React from "react";
import profile_pic from '../images/pic1.jpg'
import {GiHamburgerMenu} from 'react-icons/gi'

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
    this.state = {active: 'home'}
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
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
        className = {this.state.active == page.value ? 'navbtn navbtn-clicked' : 'navbtn'} 
        key = {key}
        onClick = {()=> this.handleClick(page.value)}> {page.display}  </div>
    );
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.navClose()
    }

  }
  

  render() {
    return (
      <div>
        <div className='nav' id="nav" ref={this.wrapperRef}>
          <div className="logo-container">
            <img src={profile_pic} className="logo" onClick={()=>this.handleClick('home')}/>
          </div>
          {this.pages.map((value, index) => {
          return this.renderbutton(value, 'navbtn' + index)
         })}
        </div>
        <GiHamburgerMenu id="nav-burger" className="navbar-burger" size={30} onClick={() => this.props.navOpen()}/>
      </div>
    )
  }
}

export default Navbar