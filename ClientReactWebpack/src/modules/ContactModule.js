import React, { Component } from 'react';

class ContactModule extends Component {
  render() {
    return (

      <div data-scroll-reveal="enter bottom but wait 0.3s" className="contact row" id="contact">
          <div data-scroll-reveal="enter bottom but wait 1.3s" className="contact-form col-xs-12 col-sm-4 col-sm-offset-4">
              <div className="contact-info">
                  <h3><span>Contact Us</span> Now</h3>
                  <p>Treasure Island, Building #1, Ave of the Palms, San Francisco</p>
                  <label>0431 259 288</label>
                  <a href="mailto:info@sfmovie.com">info@sfmovie.com</a>
                  <i> </i>
              </div>
          </div>
      </div>
    );
  }
}

export default ContactModule;
