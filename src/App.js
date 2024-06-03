import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Education from "./components/Education";
import Thesis from "./components/Thesis";
import Council from "./components/Council";
import Lang from "./components/Lang";
import Iazzai from "./components/Iazzai";
import logo from './logo.svg';
import './App.css';



export default class App extends React.Component{

  // activePage is the current opened page; home, work, etc...
  // navOpen tells if the navigation bar is opened in mobile view.
  constructor(props) {
    super(props)
    this.state = {
      activePage: 'home',
      navOpen: false 
    }
  }

  // If the window is resized, the layout should change depending on if navbar is open or not.
  // This event keeps track of the resize.
  componentDidMount() {
    window.addEventListener('resize', (e)=>this.handleResize(e));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', (e)=>this.handleResize(e));
  }

  // Handle resize of window, if view is small then the window should scale according to
  // whether or not the navbar is open.
  handleResize(event) {
    if (window.innerWidth >= 768) {
      document.getElementById('nav').style.width = "20%"
    }
    if ((window.innerWidth < 768) && (this.state.navOpen==true)) {
      document.getElementById('nav').style.width = "40%"
    }
    if ((window.innerWidth < 768) && (this.state.navOpen==false)) {
      document.getElementById('nav').style.width = "0%"
    }
  }

  // User clicks page in navbar, set active page to target value, and close navbar
  // Closing navbar does nothing if view is large
  handlePageClick(page_value) {
    this.setState({activePage: page_value})
    this.navClose()
  }

  navOpen() {
    this.setState({navOpen: true})
    document.getElementById('nav').style.width = "40%"
  }

  navClose() {
    if (window.innerWidth < 768) {
      this.setState({navOpen: false})
      document.getElementById('nav').style.width = "0%"
    }
  }

  render() {
    // page is the component corresponding to the chosen activePage, home, lang, etc...
    // When user clicks "edu" for example, the page should be the component "Education"
    // which is loaded from components folder. Page is then rendered below.
    let page
    if (this.state.activePage === 'home') {
      page = <Home/>
    }
    if (this.state.activePage === 'work') {
      page = <Work/>
    }
    if (this.state.activePage === 'edu') {
      page = <Education/>
    }
    if (this.state.activePage === 'iazzai') {
      page = <Iazzai/>
    }
    if (this.state.activePage === 'thesis') {
      page = <Thesis/>
    }
    if (this.state.activePage === 'council') {
      page = <Council/>
    }
    if (this.state.activePage === 'lang') {
      page = <Lang/>
    }

    // Render the website wrapper, navbar, page-wrapper, finally render page.
    return (
      <div className='website-container'>
        <Navbar handlePageClick={(pageValue) => this.handlePageClick(pageValue)} navOpen={()=>this.navOpen()} navClose={()=>this.navClose()}/>
        <div className="page-container" id="page">
          {page}
        </div>
      </div>
    )
  }
}