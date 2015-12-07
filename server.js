var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requiresAuthentication: function (req, res, next) {
		console.log('Private information used');
		next();
	},
	logger: function (req, res, next) {
		var now = new Date();
		console.log('Request (' + now.toString() + '):' + req.method + ' - ' + req.originalUrl);
		next();
	}
};

app.get('/about', middleware.requiresAuthentication, function (req, res) {
	res.send('About us!');
})

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Server started o port ' + PORT + '!');
});