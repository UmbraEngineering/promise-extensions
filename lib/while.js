
module.exports = function(Promise) {
	// 
	// Builds a while loop stucture with promises
	// 
	//   Promise.while(<condition>).do(<body>).then(<after>);
	// 
	return function(condition) {
		return { do: doFunc };

		function doFunc(func) {
			var breakCalled = false;
			var breakFunc = function() {
				breakCalled = true;
			};

			return new Promise(function(resolve, reject) {
				function loop() {
					if (breakCalled || ! condition()) {
						return resolve();
					}

					func(breakFunc).then(loop, reject);
				}

				process.nextTick(loop);
			});
		};
	};
};
