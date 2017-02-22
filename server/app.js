console.log('the server is running');

var express = require('express'); // brings in the express library
var app = express(); // express called as a function that returns an object. this function returns app, which is an object.

app.use(express.static('server/public')); // this line runs everytime a request is made to the server. is this a request for a static file?

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}];

app.get('/fish', function(req, res){ // the order of req and res matter.
  console.log('req:', req);
  res.send(fishiesList);
});

app.get('/fish/first', function(req, res){ // the order of req and res matter.
  res.send(fishiesList[0]);
});

app.get('/fish/last', function(req, res){ // the order of req and res matter.
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

app.get('/fish/last/name', function(req, res){ // the order of req and res matter.
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});

app.get('/fish/first/name', function(req, res){ // this url structure tries to categorize the types of requests you're making.
  res.send(fishiesList[0].name);
});

app.listen(5000); // our node server starts listening on port 5000. this is the first thing that happens.
