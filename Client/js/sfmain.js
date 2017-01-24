/*--
    Version: 1.0
    Author: mfm@vip.qq.com
    Date：2017-01-23
    Description：The main logical file for the SFMovie Client
*/
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
            $("body").css("background-image", "url(images/banner"+ index_new +".jpg)")
            return;
        }
    });    
    
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

// The list of currently stored movies. Not with the array, with the object, easy to search with id
var name2Id = {};     
// The currently stored video details
var curData = {};

// Calls the map query interface
function FindLocation () {    
    getLocation($('#key').val(), curData);
    return false;
}

// General prompt information
function showMsg (resultMsg) {
    $('#resultMsg').html(resultMsg);
    $('#infoModal')
        .modal('show')
        .on('hidden.bs.modal', function () {                    
            // Reset the location
            var userAddr = 'San Francisco';    
            googleSearch(userAddr, 12);
        });  
}

// Python API URL
var Config = {
    API_URL : "http://192.168.199.141:5000/sfmovie/query"    
}
