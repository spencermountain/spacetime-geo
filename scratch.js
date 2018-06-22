const spacetime = require('spacetime')
const geo = require('./src/index')
// const geo = require('./builds/spacetime-geo')

spacetime.extend(geo)

let s = spacetime('june 4 2018', 'Canada/Eastern')
console.log(s.point())
