var express = require('express');
var router = express.Router(); // special object that bundles routes and hands them back to router.js
//need to change app. to router. in front of the get and post requests, when you are using the express router

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}]; // eventually, this will be a call the the DB

router.get('/', function(req, res){ // the order of req and res matter.
  // console.log('req:', req);
  res.send(fishiesList);
});

router.get('/first', function(req, res){ // the order of req and res matter.
  res.send(fishiesList[0]);
});

router.get('/last', function(req, res){ // the order of req and res matter.
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

router.get('/last/name', function(req, res){ // the order of req and res matter.
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});

router.get('/first/name', function(req, res){ // this url structure tries to categorize the types of requests you're making.
  res.send(fishiesList[0].name);
});

router.post('/new', function(req, res){
  var newFish = req.body; // body parser creates .body // relates back to our new newFishObject on the client side
  fishiesList.push(newFish);
  console.log(fishiesList);
  res.sendStatus(200);
});

module.exports = router; // this links back to the var fish = require('./routues/fish.js') in the app.js file
