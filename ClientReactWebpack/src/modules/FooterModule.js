import React, { Component } from 'react';

class FooterModule extends Component {
  render() {
    return (
      <div data-scroll-reveal="enter bottom but wait 0.7s" className="footer">
          <div data-scroll-reveal="enter bottom but wait 0.7s" className="footer-top">
              <div className="wrap">
                  <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#search">Search</a></li>
                      <li><a href="#film">Popular</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
          <div className="footer-bottom">
              <div className="wrap">
                  <p>Copyright © 2017 San Francisco Film Locations</p>
              </div>
          </div>
      </div>
    );
  }
}

export default FooterModule;
