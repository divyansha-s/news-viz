var express = require("express");
var myParser = require("body-parser");
var app = express();

  app.use(myParser.json({extended : true}));

  app.post("calldata.html", function(request, response) {
    var fs = require('fs');
	fs.appendFile("data.json", request, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
 });
