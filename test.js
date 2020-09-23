let ff = require("./index");

if (String(ff(0.2 * 0.2)) != "0.04") console.log("test failed 1");
if (ff(1 / 3) != 1 / 3) console.log("test failed 2");
if (ff(3 / Math.pow(10, 17)) != 3 / Math.pow(10, 17)) console.log("test failed 3");
if (ff(3 / Math.pow(10, 20)) != 3 / Math.pow(10, 20)) console.log("test failed 4");
if (ff(20 / Math.pow(10, 20)) != 20 / Math.pow(10, 20)) console.log("test failed 5");
// if (ff(0.2 * 0.2) != 0.2 * 0.2) console.log("test failed 6");
if (ff(0.00015625) != 2 / 12800) console.log("test failed 7");
if (ff(2 / 12800) != 2 / 12800) console.log("test failed 8");

if (ff.compare(3.546, 3.54)) console.log("test failed 9");
if (!ff.compare(4.222, 4, 0)) console.log("test failed 10");
if (ff.compare(4.222, 4, 2)) console.log("test failed 11");

console.log("test complete");
