console.log('the server is running');

var express = require('express'); // brings in the express library
var app = express(); // express called as a function that returns an object. this function returns app, which is an object.
var bodyParser = require('body-parser');
var fish = require('./routues/fish.js') // ./ means the current folder that you are in right now. in this example, the folder is server

app.use(bodyParser.urlencoded({extended: true})); // you need this line of code to go with line 5. This creates req.body.

app.use(express.static('server/public')); // this line runs everytime a request is made to the server. is this a request for a static file?

app.use('/fish', fish); // fish relates to var fish, above and to the router in the fish. js file. anything coming in with /fish (from the fish.js file) will be absorbed by this line of code

app.listen(5000); // our node server starts listening on port 5000. this is the first thing that happens.
