console.log('the server is running');
var express = require('express'); // brings in the express library
var app = express(); // express called as a function that returns an object. this function returns app, which is an object.

app.use(express.static('server/public')); // this line runs everytime a request is made to the server. is this a request for a static file?

var fishiesList = [{name: 'walleye'}, {name: 'pike'}];

app.get('/fish', function(req, res){ // the order of req and res matter.
  console.log('req:', req);
  res.send(fishiesList);

});

app.listen(5000);
