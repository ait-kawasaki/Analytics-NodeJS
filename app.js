/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();
});


app.post("/", function(request, response) {
    var options = {
        username: "resAdmin",
        password: "replace"
    };

    var url = "https://brsv2-6855bc66.ng.bluemix.net/DecisionService/rest" +  "/vacationsRuleApp/1.0/vacationsRuleProject/json";

    restler.postJson(url, request.body, options).on('complete', function(data) {
        response.send(data);
    });
});

app.listen(process.env.VCAP_APP_PORT || 8080);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//app.post("/", function(request, response) {
//    var options = {
//        username: "replace",
//        password: "replace"
//    };
//
//    var url = "https://brsv2-6855bc66.ng.bluemix.net/DecisionService/rest" + "/vacationsRuleApp/1.0/vacationsRuleProject/json";
//
//    restler.postJson(url, request.body, options).on('complete', function(data) {
//        response.send(data);
//    });
//});
//
//
//app.get('/', function (req, res) {
//  var data = {
//    "bestAnimals": [
//      "wombat",
//      "corgi",
//      "puffer fish",
//      "owl",
//      "crow"
//    ]
//  };
//
//  res.json(data);
//});


//// start server on the specified port and binding host
//app.listen(appEnv.port, '0.0.0.0', function() {
//  // print a message when the server starts listening
//  console.log("server starting on " + appEnv.url);
//});
