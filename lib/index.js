
var Promise;

exports.init = function(_Promise) {
	Promise = _Promise;

	return exports;
};

exports.install = function(ext) {
	if (! Promise[ext]) {
		Promise[ext] = require('./' + ext)(Promise);
	}

	return exports;
};
