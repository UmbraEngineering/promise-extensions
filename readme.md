
# Promise Extensions

Extensions to help when working with a Promises/A+ implementation.

Need promises? Maybe take a look at [promise-es6](https://github.com/UmbraEngineering/promise).

# Install

```bash
$ npm install [--save] promise-extensions
```

# Usage

```javascript
require('promise-extensions').init(Promise)
    .install('all')
    .install('race')
    .install('defer');
```
