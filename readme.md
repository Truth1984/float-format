## float format

format and compare float number in javascript

### API

#### compare(float1, float2, precision)

if precision is undefined, then use the minimum precision of float1 and float2,
else use given precision to compare two numbers

example

```js
const ff = require("float-format");
ff(0.2 * 0.2); // 0.04
0.2 * 0.2; // 0.04000000000000001

0.2 * 0.2 == 0.04; // false
ff(0.2 * 0.2) == 0.04; // true
0.2 * 0.2 - 0.04; // 6.938893903907228e-18

ff.compare(3.546, 3.54); // false, 3.55 != 3.54
ff.compare(4.222, 4, 0); // true, 4 == 4
ff.compare(4.222, 4, 2); // false 4.22 != 4
```
