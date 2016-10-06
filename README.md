# trails-api
Trails classes with typings definitions

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## Usage 
### Installation
```
npm i --save trails-api
```

### In JS
```

```

### In TS
```
import {Request, Response} from 'express';
import { Controller } from 'trails-api';

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Trails app
 * @see {@link http://trailsjs.io/doc/api/controllers}
 * @this TrailsApp
 */
export class DefaultController extends Controller {
  /**
   * Return some info about this application
   */
  info(req: Request, res: Response ) {
    res.status(200).json(this.app.services.DefaultService.getApplicationInfo())
  }
}
```

## License
[MIT](https://github.com/jaumard/trails-api/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trails-api.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trails-api
[npm-download]: https://img.shields.io/npm/dt/trails-api.svg
[ci-image]: https://travis-ci.org/jaumard/trails-api.svg?branch=master
[ci-url]: https://travis-ci.org/jaumard/trails-api
[daviddm-image]: http://img.shields.io/david/jaumard/trails-api.svg?style=flat-square
[daviddm-url]: https://david-dm.org/jaumard/trails-api
[codeclimate-image]: https://img.shields.io/codeclimate/github/jaumard/trails-api.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jaumard/trails-api
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
