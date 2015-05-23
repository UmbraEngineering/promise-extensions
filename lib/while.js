
module.exports = function(Promise) {
	// 
	// Builds a while loop stucture with promises
	// 
	//   Promise.while(<condition>).do(<body>).then(<after>);
	// 
	return function(condition) {
		return { do: doFunc };

		function doFunc(func) {
			return new Promise(function(resolve, reject) {
				function loop() {
					if (! condition()) {
						return resolve();
					}

					func().then(loop, reject);
				}

				process.nextTick(loop);
			});
		};
	};
};
