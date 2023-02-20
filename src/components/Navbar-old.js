import React from "react";

const s = {
  btn:{backgroundColor: 'darkred'}
}

class Navbar extends React.Component {


  render() {
    return (
<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Basam</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default Navbar