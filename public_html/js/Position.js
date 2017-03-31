var longitude;
var latitude;
// Constructor
function Position(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            longitude = position.coords.longitude; 
            latitude = position.coords.latitude; 
        });
    }
    else {
        console.log("This browser does not support navigator!!!");
    }
};








