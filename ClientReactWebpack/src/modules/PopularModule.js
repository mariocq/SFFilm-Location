import React, { Component } from 'react';

class PopularModule extends Component {
  render() {
    return (
      <div className="top-grids" id="film">
          <div className="wrap">
              <h3><span>Most</span> Popular</h3>
              <i> </i>
              <div data-scroll-reveal="enter bottom but wait 0.3s" className="top-grids-box row">
                  <div data-scroll-reveal="enter top over 0.7s after 0.7s" className="top-grid col-xs-12 col-sm-3">
                      <a className="icon1" href="#">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-dianying"></use>
                          </svg>
                      </a>
                      <h4><a href="#">Most Popular Movies</a></h4>
                      <p>This is a list of the most popular movies, the data obtained from imdb. See if you can find them on the map</p>
                      <a className="top-btn" href="http://www.imdb.com/chart/moviemeter?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2671047782&pf_rd_r=0JSSWKPD8WVJPN80XFA4&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_ql_2" target="_blank">Read  More</a>
                  </div>
                  <div data-scroll-reveal="enter top over 0.7s after 0.7s" className="top-grid col-xs-12 col-sm-3">
                      <a className="icon2" href="#">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-dianshi"></use>
                          </svg>
                      </a>
                      <h4><a href="#">Most Popular TV</a></h4>
                      <p>This is a list of the most popular TV, the data obtained from imdb. See if you can find them on the map</p>
                      <a className="top-btn" href="http://www.imdb.com/chart/tvmeter?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2671047782&pf_rd_r=18M6AGMNNPG1C5YD329Q&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_ql_5" target="_blank">Read  More</a>
                  </div>
                  <div data-scroll-reveal="enter top over 0.7s after 0.7s" className="top-grid col-xs-12 col-sm-3">
                      <a className="icon3" href="#">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xingguang"></use>
                          </svg>
                      </a>
                      <h4><a href="#">Top Rated Movies</a></h4>
                      <p>This is a list of the Top Rated movies, the data obtained from imdb. See if you can find them on the map</p>
                      <a className="top-btn" href="http://www.imdb.com/chart/top?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2671047782&pf_rd_r=1QQWEWR9EFP8G5HHHP45&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=tvmeter&ref_=chttvm_ql_3" target="_blank">Read  More</a>
                  </div>
                  <div data-scroll-reveal="enter top over 0.7s after 0.7s" className="top-grid col-xs-12 col-sm-3">
                      <a className="icon4" href="#">
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiaidu"></use>
                          </svg>
                      </a>
                      <h4><a href="#">Top Rated TV</a></h4>
                      <p>This is a list of the Top Rated TV, the data obtained from imdb. See if you can find them on the map</p>
                      <a className="top-btn" href="http://www.imdb.com/chart/toptv?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2671047782&pf_rd_r=1QQWEWR9EFP8G5HHHP45&pf_rd_s=right-4&pf_rd_t=15506&pf_rd_i=tvmeter&ref_=chttvm_ql_6" target="_blank">Read  More</a>
                  </div>
                  <div className="clear"> </div>
              </div>
          </div>
      </div>
    );
  }
}

export default PopularModule;
