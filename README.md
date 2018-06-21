<!-- <div align="center">
	<h3>sunday-driver</h3>
	<a href="https://npmjs.org/package/spacetime">
		<img src="https://img.shields.io/npm/v/sunday-driver.svg?style=flat-square" />
	</a>
  <a href="https://www.codacy.com/app/spencerkelly86/sunday-driver">
    <img src="https://api.codacy.com/project/badge/grade/1b0f3874f43f4b8c87ac855bb69bca8f" />
  </a>
	<div></div>
</div>
<p></p> -->

[spacetime](https://github.com/spencermountain/spacetime) plugin for determining a timezone based on a point on the earth.

this is really just a wrapper of [tz-lookup](https://github.com/darkskyapp/tz-lookup/) by dark-sky - based on [Evan Siroky's](http://www.evansiroky.com/) awesome [boundary-builder](https://github.com/evansiroky/timezone-boundary-builder/) work.

`npm i spacetime-geo`

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

You can always produce a more-detailed, and larger (<=130mb!) dataset using Evan Siroky's [script](https://github.com/evansiroky/timezone-boundary-builder/).

MIT
