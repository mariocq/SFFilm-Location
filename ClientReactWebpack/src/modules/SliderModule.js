import React, { Component } from 'react';

class SliderModule extends Component {
    constructor(props) {
      super(props);
      // slider
      $(document).ready(function(){
          // initialize scrollReveal
          window.scrollReveal = new scrollReveal();

          // initialize slide
          $('#jquery-slide').slippry({
              // general elements & wrapper
              slippryWrapper: '<div class="sy-box jquery-slide" />', // wrapper to wrap everything, including pager
              // options
              adaptiveHeight: false, // height of the sliders adapts to current slide
              useCSS: false, // true, false -> fallback to js if no browser support
              autoHover: false,
              transition: 'fade',
              onSlideBefore: function (el, index_old, index_new) {
                  $("#move-top").css("background-image", "url(images/banner"+ index_new +".png)")
                  return;
              }
          });
      });
    }

    render() {
      return (
        <div data-scroll-reveal="enter bottom but wait 0.7s" id="home">
            <div className="wrap">
                <ul id="jquery-slide">
                  <li>
                    <a href="#slide1">
                    </a>
                    <div data-scroll-reveal="enter bottom but wait 0.7s" className="slider-detils">
                        <h3>San Francisco <label>Film Locations</label></h3>
                        <span>This is a service that shows on a map where movies have been filmed in San Francisco. You should be able to filter the view using<i> autocompletion search.</i></span>
                        <a className="slide-btn" href="#search">Try it!</a>
                    </div>
                  </li>
                  <li>
                    <a href="#slide2">
                    </a>
                      <div data-scroll-reveal="enter bottom but wait 1s" className="slider-detils">
                        <h3>In the film scene to <label>Leave Memories</label></h3>
                        <span>If you are traveling in San Francisco, maybe go to the movie scene, is also a good choice. We would be happy to provide you with this service.</span>
                        <a className="slide-btn" href="#search">Try it!</a>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
      );
    }
  }

export default SliderModule;
