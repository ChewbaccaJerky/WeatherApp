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

function celsiusToFaren(temp) {
    return parseFloat((temp * (9/5)) + 32).toFixed(2);
}

function farenToCelsius(temp) {
    return parseFloat((temp - 32) * (5 / 9)).toFixed(2);
}

function parse($id) {
    return parseFloat(($id.text().split(' '))[0]);
}

// populate webpage
getLocation();



$(document).ready(function(){
    var temps = {
      temp : 0.0,
      temp_min : 0.0,
      temp_max : 0.0
    };
    
    $('#btn-c').on('click', function(){
        // If button is not active
        if($("#btn-f").hasClass("active") === true){
            // populate temps
            temps.temp = parse($("#temp"));
            temps.temp_min = parse($("#temp_min"));
            temps.temp_max = parse($("#temp_max"));
            
            // change html
            $("#temp").html(farenToCelsius(temps.temp) + " C");
            $("#temp_min").html(farenToCelsius(temps.temp_min) + " C");
            $("#temp_max").html(farenToCelsius(temps.temp_max) + " C");
            

            // remove other celsius button's active class
            $('#btn-f').removeClass("active");
            $('#btn-c').addClass("active");
        }
    });
    
    $('#btn-f').on('click', function(){
        // If button is not active
        if($("#btn-c").hasClass("active") === true){
            // populate temps
            temps.temp = parse($("#temp"));
            temps.temp_min = parse($("#temp_min"));
            temps.temp_max = parse($("#temp_max"));
            
            // change html
            $("#temp").html(celsiusToFaren(temps.temp) + " F");
            $("#temp_min").html(celsiusToFaren(temps.temp_min) + " F");
            $("#temp_max").html(celsiusToFaren(temps.temp_max) + " F");
            

            // remove other celsius button's active class
            $('#btn-c').removeClass("active");
            $('#btn-f').addClass("active");
        }
    });
});

