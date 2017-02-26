import React, { Component } from 'react';
import SliderModule from './SliderModule.js';
import LogoModule from './LogoModule.js';

class HeaderModule extends Component {
  render() {
    return (
      <div id="move-top">
          <div className="header animated bounceInDown">
              <div className="wrap">
                  <LogoModule />
                  <TopNav />
                  <div className="clear"> </div>
              </div>
          </div>
          <SliderModule />
      </div>
    );
  }
}

class TopNav extends Component {
  render() {
    return (
      <div data-scroll-reveal="enter from the top over 0.7s" className="top-nav">
          <ul>
              <li className="active"><a href="#home">Home<span> </span></a></li>
              <li><a href="#search">Search</a></li>
              <li><a href="#film">Popular</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    );
  }
}

export default HeaderModule;
