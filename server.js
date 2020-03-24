var express = require("express");
var app     = express();
var path    = require("path");
var port = 3000;
//Setting for PROD deployment
var compression = require('compression');
var helmet = require('helmet');

// Get data from api
var unirest = require("unirest");
var req = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");  
var jsonBodyResonse, jsonHeaderResponse;
        
req.headers({
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "357fc5fe18msh5d2faa76fc943fbp1c441djsnf2fd3a28dcd1"
});

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    jsonBodyResonse = res.body;
    jsonHeaderResponse = res.headers;
    //console.log(res.body);

});

//using PROD libs
app.use(compression());
app.use(helmet());

app.get('/map', function(req, res){
    res.render('map.ejs',{myData: jsonBodyResonse, myHeader: jsonHeaderResponse});
});

app.listen(port);


console.log("Running at Port : " + port);
console.log("link : http://localhost:"+port+"/map");