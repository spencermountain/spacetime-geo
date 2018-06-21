const geo = require('./src/index')
const spacetime = require('spacetime')
spacetime.extend(geo)

let s = spacetime('june 4 2018', 'Canada/Eastern').time('3:37pm')
s.in([48.7235, 1.9931]) //near paris

console.log(s.timezone().name)
console.log(s.time())

// s.in([42.7235, -73.6931]) //new york
// s.in([50.4050, -31.8971]) // atlantic ocean
