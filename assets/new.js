var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var urlEndpoint = " api.openweathermap.org"
var apiKey = "b6e1799f5784f921d2da81a18c69dc48";

$.ajax({
    url: url + "&units=imperial" + "&APPID=b6e1799f5784f921d2da81a18c69dc48",
    type: "GET",
    dataType: "jsonp",
    success: function(data){
        console.log(data);
    }
})