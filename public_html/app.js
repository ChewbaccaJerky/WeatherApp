/* Main JS */
var userCoords = {
    long : '',
    lat: ''
};

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("This device does not support geolocation.");
    }
}

function showPosition(position){
    userCoords.lat = position.coords.latitude;
    userCoords.long = position.coords.longitude;
    
    console.log(
        "Latitude: " + userCoords.lat + 
        "\n" +
        "Longitude:" + userCoords.long
    );
    
    var weather = new WeatherService(userCoords);
    weather.loadCurrentWeather();
}

getLocation();

$(document).ready(function(){
    
});