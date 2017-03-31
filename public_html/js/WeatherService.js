
// Constructor
function WeatherService(coords){
    this.apiKey = "1cb5a2f98773b84b88a87fea368d23d5";
    this.longitude = coords.long;
    this.latitude = coords.lat;
    this.forecast;
}

// Load Forecast from OpenWeatherApi
WeatherService.prototype.loadForecast = function(){
    
    $.ajax({
        url : "http://api.openweathermap.org/data/2.5/forecast?" 
                + "appid=" + this.apiKey 
                + "&lat=" + this.latitude
                + "&lon=" + this.longitude
        ,
        dataType : "json",
        success : function(result){
            $('body').html(JSON.stringify(result));
        },
        error : function(){
            
        }
    });
};

// Returns the forecast
WeatherService.prototype.getForecast = function(){
    return forecast;
};

