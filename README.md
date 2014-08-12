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
