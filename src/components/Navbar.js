import React from "react";
import profile_pic from '../images/pic2.png'
import {GiHamburgerMenu} from 'react-icons/gi'

class Navbar extends React.Component {


// this.pages contains the different pages that are clickable and will render the corresponding
// component. active will highlight the current viewed page.
// We create a reference to know when the user clicks outside the navbar, in that event the
// navbar should close (if the browser view is small enough, on desktop view the navbar stays open)
  constructor(props) {
    super(props)
    this.pages = [
      {display: 'Work History', value: 'work'},
      {display: 'Education', value: 'edu'},
      {display: 'IAZZAI', value: 'iazzai'},
      {display: 'Language App', value: 'lang'},
      {display: 'Master Thesis', value: 'thesis'},
      {display: 'Student Council', value: 'council'}
    ];
    this.state = {active: 'home'}
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // Event listener to listen if user clicks outside the navbar. In which case it should close.
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // When user clicks a page on navbar, that page should be displayed
  // and the text in the navbar should remain highlighted.
  handleClick(page_value) {
    this.props.handlePageClick(page_value)
    this.setState({
      active: page_value
    })
  }

  // For each page, render the corresponding clickable text in the navbar
  renderbutton(page, key) {   
    return( 
      <div value = {page.value}
        className = {this.state.active == page.value ? 'navbtn navbtn-clicked' : 'navbtn'} 
        key = {key}
        onClick = {()=> this.handleClick(page.value)}> {page.display}  </div>
    );
  }

  // If user clicks outside the navbar, the navbar should close (navClose does nothing if 
  // browser view is too big)
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.navClose()
    }

  }
  
  // First a wrapper div, then navbar-wrapper.
  // Then logo container with logo.
  // Then the page-clickable-texts are rendered in the navbar.
  // Finally render the hamburger menu for small view.
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