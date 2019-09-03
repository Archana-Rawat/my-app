import React, { Component } from 'react';
import './App.css';

import logo from './images/HI_mk_logo_hiltonbrandlogo_3.jpg';
import mainImage from './images/hotelexterior.jpg';  

class App extends Component {
  render() {
    return (
      <div>
      <header>
      <nav id="leftHeader">
        <ul>
          <li><a href="/">Back</a></li>
        </ul>
      </nav>
      <h1>Hotel Details</h1>
        <picture className="logo">
          <source srcSet={logo}/>
          <img src={logo} alt="logo" />
        </picture>
    </header>
    <main>
    <div>
        <picture className="mainImage"><source srcSet={mainImage} />
          <img src={mainImage} alt="main"/>
        </picture>
        <h2 className="name"><b>Hilton Chicago</b></h2>
        <address className="address">
          720 South Michigan Avenue <br/>Chicago, Illinois, 60605
        </address>
        <a className="number" href="">1-312-922-4400</a>
      </div>
      <div className="accordion">
        <button className="accordionOption">
          <span className="accordionTitle">Map<span className="arrow"></span></span>
        </button>
        <div className="accordionContent" hidden></div>
        <button className="accordionOption">
          <span className="accordionTitle" >Photo gallery<span className="arrow"></span></span>
        </button>
        <div className="accordionContent" hidden></div>
        <button className="accordionOption">
          <span className="accordionTitle">Amenities<span className="arrow"></span></span>
        </button>  
        <div className="accordionContent" hidden></div>
      </div>
    </main>
    <footer className="footer"></footer>
      </div>
    );
  }

}
export default App;
