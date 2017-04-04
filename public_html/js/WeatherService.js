// IMAGE PATHS
var weather_img = {
    sunny : 'vendor/img/sunny.gif',
    rain : 'vendor/img/rain.gif',
    cloud : 'vendor/img/cloudy.gif',
    lightning : 'vendor/img/lightning.gif',
    partly_cloud : 'vendor/img/partly-cloudy.gif',
    snow : 'vendor/img/snow.gif'
};

// Constructor
function WeatherService(coords){
    this.apiKey = "1cb5a2f98773b84b88a87fea368d23d5";
    this.longitude = coords.long;
    this.latitude = coords.lat;
    this.weather = {
        //main:
        temp : '',
        temp_min : '',
        temp_max : '',
        //weather[0]:
        main : ''
    };
}

// Load Forecast from OpenWeatherApi
WeatherService.prototype.loadCurrentWeather = function(){
    
    $.ajax({
        url : "http://api.openweathermap.org/data/2.5/weather?" 
                + "appid=" + this.apiKey 
                + "&lat=" + this.latitude
                + "&lon=" + this.longitude
        ,
        dataType : "json",
        success : this.success,
        error : function(){
            
        }
    });
};

/* Load city's weather when searched */

WeatherService.prototype.loadSearchedCityWeather = function(city){
    $.ajax({
        url : "http://api.openweathermap.org/data/2.5/weather?" 
                + "q=" + city + "&appid=" + apiKey
        ,
        dataType : "json",
        success : this.success,
        error : function(){
            
        }
    });
};

WeatherService.prototype.success = function(result){
  
  var kelvinToFaren = function(temp) {
      return (temp * (9/5)) - 459.67;
  };
  
  var weather = {
      description : result.weather[0].main,
      temp : parseFloat(kelvinToFaren(result.main.temp)).toFixed(2),
      temp_min : parseFloat(kelvinToFaren(result.main.temp_min)).toFixed(2),
      temp_max : parseFloat(kelvinToFaren(result.main.temp_max)).toFixed(2)
  };
  
  console.log("Begin!");
  
  $('#temp').append(weather.temp + " F");
  $('#temp_min').append(weather.temp_min + " F");
  $('#temp_max').append(weather.temp_max + " F");
  $('#main').append(weather.description);
  $('#btn-f').addClass("active");
  
  //this.setBackground(weather.description);
};


WeatherService.prototype.setBackground = function(description){
    
    switch(description){
      case "clouds":
      case "Clouds":
          $('.weather-box').css("background", "url("+weather_img.cloud+") no-repeat center");
          break;
      case "Clear":
      case "clear":
          $('.weather-box').css("background", "url("+weather_img.sunny+") no-repeat center");
          break;
      case "Lightning":
      case "lighning":
          $('.weather-box').css("background", "url("+weather_img.lightning+") no-repeat center");
          break;
      case "Snowing":
      case "snowing":
          $('.weather-box').css("background", "url("+weather_img.snow+") no-repeat center");
          break;
      default:
          $('.weather-box').css("background", "url("+weather_img.sunny+") no-repeat center");
          
    }
    
    $('.weather-box').css("background-size", "contain");
};