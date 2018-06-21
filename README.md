<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <div>lat/long → timezone</div>
  <a href="https://npmjs.org/package/spacetime-geo">
    <img src="https://img.shields.io/npm/v/spacetime-geo.svg?style=flat-square" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square" />
  </a>
</div>

<div align="center">
  <code>npm install spacetime-geo</code>
</div>

[spacetime](https://github.com/spencermountain/spacetime) plugin for determining a timezone based on a point on the earth.

this is really just a wrapper of [tz-lookup](https://github.com/darkskyapp/tz-lookup/) by dark-sky - based on [Evan Siroky's](http://www.evansiroky.com/) awesome [boundary-builder](https://github.com/evansiroky/timezone-boundary-builder/) work.


```js
const spacetime = require('./src/index')
const geo = require('spacetime-geo')
//apply the plugin
spacetime.extend(geo)

//set a specific time somewhere
let s = spacetime('June 4 2018', 'Canada/Eastern').time('3:37pm')

//go to a specific point (near paris)
s.in([48.7235, 1.9931])

s.timezone().name
//Europe/Paris
s.time()
//9:37pm
```

spacetime-geo accepts other formats of geolocation too:
```js
spacetime.now().in({lat:42.7235, lon:-73.6931})
spacetime.now().in('48.7235, 1.9931')
```

### Caveats:
[timezone boundaries](https://github.com/evansiroky/timezone-boundary-builder/) are very, very detailed things. In order to keep this library small, we've [simplified](http://mourner.github.io/simplify-js/) the paths. This may produce some off-by-one errors, close to the boundaries, especially for jagged coasts, or complex political boundaries.

![1091](https://user-images.githubusercontent.com/399657/41735400-9279263a-7557-11e8-9c57-6f993e410e00.png)

You can always produce a more-detailed, and larger (<=130mb!) dataset using Evan Siroky's [script](https://github.com/evansiroky/timezone-boundary-builder/).

MIT