
var Promise;

exports.init = function(_Promise) {
	Promise = _Promise;
};

exports.install = function(ext) {
	if (! Promise[ext]) {
		Promise[ext] = require('./' + ext)(Promise);
	}
};
