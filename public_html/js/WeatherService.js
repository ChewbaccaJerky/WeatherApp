
// Constructor
function WeatherService(){
    this.apiKey = "1cb5a2f98773b84b88a87fea368d23d5";
    // Retrieve position
    this.position = new Position();
    this.longitude = this.position.getLongitude();
    this.latitude = this.position.getLatitude();
    this.forecast;
}

// Load Forecast from OpenWeatherApi
WeatherService.prototype.loadForecast = function(){
    
    $.ajax({
        url : "api.openweathermap.org/data/2.5/forecast?" 
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

