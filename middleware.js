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

module.exports = middleware;