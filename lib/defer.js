
module.exports = function(Promise) {
	// 
	// Promise.defer
	// 
	// Returns an object (deferred) containing a newly created promise and resolve/reject methods
	// connected to the new promise
	// 
	// @return Promise
	// 
	return function() {
		var deferred = { };

		deferred.promise = new Promise(function(resolve, reject) {
			deferred.resolve = resolve;
			deferred.reject = reject;
		});

		return deferred;
	};
};
