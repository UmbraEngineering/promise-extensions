
module.exports = function(Promise) {
	// 
	// Call, in series, an arbitrary number of functions which may or may not return a promise.
	// 
	// Returns a new promise for when all tasks are completed
	// 
	// @param {tasks} an array of functions to call in series
	// @return Promise
	// 
	return function(tasks) {
		return tasks.reduce(function(prevPromise, task) {
			if (prevPromise) {
				return prevPromise.then(task);
			}

			return task();
		}, null);
	};
}
