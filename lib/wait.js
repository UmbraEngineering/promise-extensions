
module.exports = function(Promise) {
	//
	// Returns a new promise which will resolve after a given amount of time.
	//
	// @param {ms} the number of milliseconds to wait before resolving
	// @return Promise
	//
	Promise.wait = function(ms) {
		return new Promise(function(resolve, reject) {
			setTimeout(resolve, ms);
		});
	};
};
