
var Position = new function(){
    // Class Variables
    this.longitude;
    this.latitude;
    
    // Load Position
    this.loadPosition = function(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
            });
        }
        else {
            console.log("This browser does not support navigator!!!");
        }
    };
    
};







