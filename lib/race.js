
module.exports = function(Promise) {
	// 
	// Returns a new promise which resolve/rejects as soon as the first given promise resolves
	// or rejects
	// 
	// This is more of a polyfill, as this should exist in a compliant environment
	// 
	// @param {promises} an array of promises
	// @return Promise
	// 
	return function(promises) {
		return new Promise(function(resolve, reject) {
			promises.forEach(function(childPromise) {
				childPromise.then(
					function(value) {
						resolve(promise, value);
					},
					function(value) {
						reject(promise, value);
					}
				);
			});
		});
	};
};
