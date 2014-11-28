gauss-random
============
Samples the standard normal distribution, with 0 mean and unit standard deviation.

# Example

```javascript
var nrand = require('gauss-random')

for(var i=0; i<10; ++i) {
  console.log(nrand())
}
```

# Install

```sh
npm install gauss-random
```

# API

#### `require('gauss-random')()`
Generates a random number from the Guassian distribution.

**Returns** A random variable from the unit gaussian distribution

# Credits
(c) 2014 Mikola Lysenko. MIT