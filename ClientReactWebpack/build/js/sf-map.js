/*--
    Version: 1.0
    Author: mfm@vip.qq.com
    Date：2017-01-23
    Description：The map api for the SFMovie Client
*/

// The list of currently stored movies. Not with the array, with the object, easy to search with id
var name2Id = {};
// The currently stored video details
var curData = {};

// Python RESTful API URL
var Config = {
    API_URL : "http://192.168.199.141:5000/sfmovie/query"
}

// call back function for google map api
function initMap() {
    // Initialize the map, navigate to San Francisco
    var userAddr = 'San Francisco';
    googleSearch(userAddr, 12);
}

// Verify input location
function getLocation (location, data) {
    //console.log(location, data)

    if (location == '') {
        resultMsg = "Location can not be empty";
        showMsg(resultMsg);
        return;
    }

    if ('title' in data) {
    	googleSearch(location, 13, data);
    }
    else
    {
        resultMsg = "Please select a location";
        showMsg(resultMsg);
    }
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

// Google Map API
function googleSearch (location, zoom, data) {
	var userAddr = location;

    geocoder = new google.maps.Geocoder();
    var map = new google.maps.Map(document.getElementById('google-map'),{zoom:zoom,center:{lat:-25,lng:131}});
    marker = new google.maps.Marker({
        position:map.getCenter(),
        map:map,
        draggable:true
    });

    geocoder.geocode({'address':userAddr}, function(results, status){
        if( status === google.maps.GeocoderStatus.OK) {
            // Find the location

            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
        }else{
            // Location not found
            resultMsg = "Sorry, can not find the location, please try another place";
            showMsg(resultMsg);
        }
    });

    // Custom pop-up prompts, show more film information
    if (data) {
    	var allActors = "";
        var fun_facts = "";
        if ("actor_1" in data) {
            allActors += data.actor_1
        }
        if ("actor_2" in data) {
            allActors += ", " + data.actor_2
        }
        if ("actor_3" in data) {
            allActors += ", " + data.actor_3
        }
        if ("fun_facts" in data) {
            fun_facts = '<div class="row"><div class="col-md-3 text-danger">Fun Facts:</div><div class="col-md-9">' + data.fun_facts +'</div></div>' ;
        }
        var info = '<h4>'+ data.title +'</h4> ('+ data.release_year +')<br>' +
            '<div class="row"><div class="col-md-3">Actors:</div><div class="col-md-9">' + allActors +'</div></div>' +
            '<div class="row"><div class="col-md-3">Director:</div><div class="col-md-9">' + data.director +'</div></div>' +
            '<div class="row"><div class="col-md-3">Production:</div><div class="col-md-9">' + data.production_company +'</div></div>' +
            '<div class="row"><div class="col-md-3">Distributor:</div><div class="col-md-9"> ' + data.distributor +'</div></div>' +
            '<div class="row"><div class="col-md-3">Writer:</div><div class="col-md-9">' + data.writer +'</div></div>' +
            fun_facts +
            '<div class="row"><div class="col-md-3">Locations:</div><div class="col-md-9">' + data.locations +'</div></div>';
        var infowindow = new google.maps.InfoWindow({
            content:info
        });

        infowindow.open(map,marker);
    }
}
