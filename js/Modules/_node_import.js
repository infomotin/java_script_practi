const fs = require('fs');
const path = require('path');
const http = require('http');
// The Express HTTP server framework is a third-party module.
// It is not part of Node but has been installed locally
const express = require("express");


const stats = require("./stats.js");
const BitSet = require("./utils/bitset.js");
// (You can also omit the .js suffix on the files you’re importing and Node will still find
// the files, but it is common to see these file extensions explicitly included.)

let average = stats.mean(data); // => 5

// Alternatively, we can use idiomatic destructuring assignment to import
// exactly the functions we want directly into the local namespace:
const { stddev } = require('./stats.js');
// This is nice and succinct, though we lose a bit of context
// without the 'stats' prefix as a namspace for the stddev() function.
let sd = stddev(data);
