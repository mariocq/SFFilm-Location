import React, { Component } from 'react';

class LogoModule extends Component {
  constructor(props) {
    super(props);

    // logo animation
    $(document).ready(function(){

          // initialize logo animation
          var el = document.querySelector('.logo-text');

          var options = {
              size: [50, 40],    // font size，px
              weight: 10,        // font bold，px
              rounded: false,    // font rounded
              color: ['#F06D6E','#F06D6E','#F06D6E','#F06D6E','#f90','#f90','#f90','#f90','#f90','#f90','#f90','#f90','#f90','#fff'],
              duration: 1,       // each letter play time (seconds)
              delay: [0, 0.1],   // each letter delay time
              fade: 0.5,         // fade time (seconds)
              easing: d3_ease.easeCubicInOut.ease   // effect
          };

          var logoText = new Letters(el, options);

          logoText.show();
    });

  }
  render() {
    return (
      <div className="logo">
          <h3 className="logo-text">San Francisco Film Locations</h3>
      </div>
    );
  }
}

export default LogoModule;
