
module.exports = function(Promise) {
	// 
	// Guards against excessive concurrency. Returns a new function which is identical to the given
	// function, except that the new function will only run a limited number of concurrent instances
	// of itself. Additional calls will be queued.
	// 
	// @param {limit} optional; the maximum number of concurrent calls allowed
	// @param {func} the function to guard
	// @return function
	// 
	Promise.guard = function(limit, func) {
		if (arguments.length === 1) {
			func = limit;
			limit = 1;
		}

		var queue = [ ];
		var running = 0;

		return function() {
			var args = arguments;
			var deferred = defer();

			queue.push([ this, args, deferred ]);
			next();

			return deferred.promise;
		};

		function next() {
			if (running < limit) {
				var data = queue.shift();

				running++;
				func.apply(data[0], data[1])
					.then(
						function(result) {
							running--;
							data[2].resolve(result);
						},
						function(err) {
							running--;
							data[2].reject(err);
						}
					);
			}
		}

		function defer() {
			var deferred = { };
			
			deferred.promise = new Promise(function(resolve, reject) {
				deferred.resolve = resolve;
				deferred.reject = reject;
			});

			return deferred;
		}
	};
};
