var express = require('express'); // brings in the express library
var app = express(); // express called as a function that returns an object. this function returns app, which is an object.

app.use(express.static('server/public')); // this line runs everytime a request is made to the server. is this a request for a static file?

app.listen(5000);
