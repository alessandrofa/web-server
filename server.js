var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.get('/about', middleware.requiresAuthentication, function (req, res) {
	res.send('About us!');
})

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Server started o port ' + PORT + '!!!');
});