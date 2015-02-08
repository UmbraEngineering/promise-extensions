
# Promise Extensions

Extensions to help when working with a Promises/A+ implementation.

Need promises? Maybe take a look at [promise-es6](https://github.com/UmbraEngineering/promise).



## Install

```bash
$ npm install [--save] promise-extensions
```



## Usage

```javascript
require('promise-extensions').init(Promise)
    .install('defer');

// Use the newly installed defer function
var deferred = Promise.defer();

doTheThing(function() {
    deferred.resolve('foo!');
});

deferred.promise.then(function(foo) {
    // ...
});
```



## Extensions

#### Promise.all ( Array promises )

A compliant [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) implementation. Returns a new promise that resolves once *all* of the given promises resolve.

```javascript
require('promise-extensions').init(Promise).install('all');

Promise.all([ promise1, promise2, promise3 ])
    .then(function(results) {
        //
    });
```

#### Promise.defer ( void )

Returns a deferred object containing a new promise, and a resolve and reject method.

```javascript
require('promise-extensions').init(Promise).install('defer');

var deferred = Promise.defer();

deferred.promise.then(function(foo) {
    // ...
});

deferred.resolve('foo');
```

#### Promise.guard ([ Number limit,] Function func )

Returns a new function with limited concurrency. The new function will only run a maximum of `limit` instances at a time.

```javascript
require('promise-extensions').init(Promise).install('guard');

var func = Promise.guard(3, function() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, Math.random() * 1000);
    });
});

for (var i = 0; i < 10; i++) {
    func();
}
```

#### Promise.ify ( Function func )

Returns a new version of a node-style async function that returns a promise.

```javascript
require('promise-extensions').init(Promise).install('ify');

var nodeStyle = function(foo, bar, callback) {
    setTimeout(function() {
        callback(null, 'success!');
    }, 1000);
};

var promiseStyle = Promise.ify(nodeStyle);

promiseStyle('foo', 'bar')
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.error(err);
    });

```

#### Promise.race ( Array promises )

<!--  -->

```javascript

```

#### Promise.wait ( Number ms )

<!--  -->

```javascript

```





