import React from "react";
import LangApp from "./components/LangApp";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Education from "./components/Education";
import Thesis from "./components/Thesis";
import Council from "./components/Council";
import Lang from "./components/Lang";
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      activePage: 'home',
      navOpen: false 
    }
  }

  componentDidMount() {
    window.addEventListener('resize', (e)=>this.handleResize(e));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', (e)=>this.handleResize(e));
  }

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
    let page
    if (this.state.activePage === 'home') {
      page = <Home/>
    }
    if (this.state.activePage === 'lang') {
      page = <LangApp/>
    }
    if (this.state.activePage === 'work') {
      page = <Work/>
    }

    if (this.state.activePage === 'edu') {
      page = <Education/>
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