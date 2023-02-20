import React from "react";
import LangApp from "./components/LangApp";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Education from "./components/Education";
import Thesis from "./components/Thesis";
import Council from "./components/Council";
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      activePage: 'home' 
    }
  }

  handlePageClick(page_value) {
    console.log(page_value)
    this.setState({activePage: page_value})
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

    return (
      <div className='flex flex-row website-container'>
        <Navbar handlePageClick={(pageValue) => this.handlePageClick(pageValue)}/>
        <div className="page-container">
          {page}
        </div>
      </div>
    )
  }
}