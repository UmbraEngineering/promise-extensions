
module.exports = function(Promise) {
	// 
	// Returns a new promise which resolves/rejects based on an array of given promises
	// 
	// This is more of a polyfill, as this should exist in a compliant environment
	// 
	// @param {promises} the promises to handle
	// @return Promise
	// 
	Promise.all = function(promises) {
		return new Promise(function(resolve, reject) {
			if (! Array.isArray(promises)) {
				resolve([ ]);
				return;
			}

			var values = [ ];
			var finished = false;
			var remaining = promises.length;
			
			promises.forEach(function(promise, index) {
				var then = utils.thenable(promise);

				if (! then) {
					onResolve(promise);
					return;
				}

				then.call(promise,
					function onResolve(value) {
						remaining--;
						values[index] = value;
						checkIfFinished();
					},
					function onReject(reason) {
						finished = true;
						reject(reason);
					}
				);
			});

			function checkIfFinished() {
				if (! finished && ! remaining) {
					finished = true;
					resolve(values);
				}
			}
		});
	};
};
