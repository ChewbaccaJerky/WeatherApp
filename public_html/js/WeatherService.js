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
                + "q=" + city
        ,
        dataType : "json",
        success : this.success,
        error : function(){
            
        }
    });
};

WeatherService.prototype.success = function(result){
  
  var weather = {
      description : result.weather[0].main,
      temp : result.main.temp,
      temp_min : result.main.temp_min,
      temp_max : result.main.temp_max
  };
  
  console.log("Begin!");
  
  $('#temp').html(weather.temp);
  $('#temp_min').html(weather.temp_min);
  $('#temp_max').html(weather.temp_max);
  $('#description').html(weather.description);
  
  switch(weather.description){
      case "clouds":
      case "Clouds":
          $('.weather-box').css("background", "url("+weather_img.cloud+") no-repeat center");
          $('.weather-box').css("background-size", "contain");
          break;
  }
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
    }
    
    $('.weather-box').css("background-size", "contain");
};