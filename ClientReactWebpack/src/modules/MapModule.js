import React, { Component } from 'react';

class MapModule extends Component {
  // Calls the map query interface
  findLocation (e) {
    e.preventDefault();
    getLocation($('#key').val(), curData);
  }
  render() {
    return (
      <div className="search" id="search">
          <div data-scroll-reveal="enter bottom but wait 1.3s" className="search-form">
              <form id="userForm" className="form-horizontal" onSubmit={this.findLocation.bind(this)}>
              <div className="form-group">
                  <div className="col-xs-9">
                      <div className="input-group">
                          <div className="input-group-btn">
                              <select id="searchOption" defaultValue="name" className="selectpicker show-menu-arrow form-control">
                                  <option value="name">Film</option>
                                  <option value="actor">Actor</option>
                                  <option value="director">Director</option>
                                  <option value="writer">Writer</option>
                                  <option value="company">Company</option>
                              </select>
                          </div>
                          <input className="form-control" type="text" name="key" id="key" data-provide="typeahead" autoComplete="off" />
                      </div>
                  </div>

                  <div className="col-xs-3">
                      <button type="submit" className="btn btn-primary" id="btnSubmit" onClick={this.findLocation.bind(this)}>Search</button>
                  </div>
              </div>
          </form>
          </div>
          <div className="search-map">
              <div id="google-map"></div>
          </div>
      </div>
    );
  }
}

export default MapModule;


// Map search code
$(document).ready(function(){
    // initialize search typeahead
    var $input = $('#key');
    $input.typeahead({
        source: function (query, process) {
            if (query == "") {
                return;
            }
            $.post(
                Config.API_URL,
                {"type" : $('#searchOption').val() , "key" : query},
                function (e) {
                    if (e.movies) {
                        // Get a list of movies from the server
                        if (e.movies.length == 0) {
                            process([]);
                            return;
                        }

                        // If it is not empty, the control is initialized
                        var array = [];
                        $.each(e.movies, function (index, ele) {
                            // store movies data
                            name2Id[ele.id] = ele;
                            array.push(ele.id + '');

                        });
                        process(array);
                    }
                }
            );
        },
        minLength: 2, // Enter at least two letters
        items: 20,    // The longest list length
        matcher: function (item) {
            return true;
        },
        highlighter: function (cid) {
            var key = $('#key').val();
            var type = $('#searchOption').val();
            var data = name2Id[cid];
            var ret = '';

            // match and highlighter
            switch(type){
                case 'writer':
                    ret = data.writer + " (" + data.title + " " + data.release_year + ")";
                break;
                case 'actor':
                    var allActors = "";
                    if ("actor_1" in data) {
                    	allActors += data.actor_1
                    }
                    if ("actor_2" in data) {
                        allActors += ", " + data.actor_2
                    }
                    if ("actor_3" in data) {
                        allActors += ", " + data.actor_3
                    }
                    ret = allActors + " (" + data.title + " " + data.release_year + ")";
                break;
                case 'name':
                    ret = data.title+ " (" + data.release_year + ")";
                break;
                case 'company':
                    ret = data.production_company + " (" + data.title + " " + data.release_year + ")";
                break;
                case 'director':
                    ret = data.director + " (" + data.title + " " + data.release_year + ")";
                break;
            }
            // Keyword bold
            var reg = new RegExp(key,"g");
            var newstr = ret.replace(reg, "<b class=text-danger>" + key + "</b>");

            // Gray Displays the location
            newstr = "<div>" + newstr + "<br><span class=locations-tips>"+data.locations+"</span></div>";

            return newstr;
        },
        updater: function (cid) {
            var ret = name2Id[cid].locations;
            curData = name2Id[cid];
            return ret;
        },
        delay: 500
    });

});
