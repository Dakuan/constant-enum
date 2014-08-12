[![Build Status](https://travis-ci.org/Dakuan/constant-enum.svg?branch=master)](https://travis-ci.org/Dakuan/constant-enum)
constant-enum
=============

Generates a frozen object with matching keys and values

## Installation

```bash
$ npm install constant-enum
```

## Usage

```javascript
var en = require('constant-enum');
en('MON', 'TUES', 'WEDS');
// or
en.apply(null, ['MON', 'TUES', 'WEDS']);
// results in ->
{
  MON: 'MON',
  TUES: 'TUES',
  WEDS: 'WEDS'
}
```

## Why?
We found this pattern helpful when implementing [Facebook's Flux architecture](http://facebook.github.io/react/docs/flux-overview.html). We use this pattern as an alterative to the one demonstrated in the [Flux TodoMVC example](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/constants/TodoConstants.js).
