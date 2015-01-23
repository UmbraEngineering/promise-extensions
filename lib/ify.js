
module.exports = function(Promise) {
	// 
	// Converts a node-style function (with a callback(err,result) as last param) into a function
	// which returns a promise
	// 
	// @param {func} the function to promise-ify
	// @return function
	// 
	Promise.ify = function(func) {
		return function() {
			var self = this;
			var args = Array.prototype.slice.call(arguments);

			return new Promise(function(resolve, reject) {
				args.push(function(err, result) {
					if (err) {
						return reject(err);
					}

					resolve(result);
				});

				func.apply(self, args);
			});
		};
	};
};
