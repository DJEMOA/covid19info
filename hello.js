var express = require("express");
var app     = express();
var path    = require("path");

// Get data from api
var unirest = require("unirest");
var req = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");  
var jsonResonse;
        
req.headers({
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "357fc5fe18msh5d2faa76fc943fbp1c441djsnf2fd3a28dcd1"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);
        
    jsonResonse = res.body;
    //console.log(res.body);
    //create map

});

app.get('/map', function(req, res){
    res.render('map.ejs',{myData: jsonResonse});
});

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/sample1.html'));
// });

 

app.listen(3000);



console.log("Running at Port 3000");