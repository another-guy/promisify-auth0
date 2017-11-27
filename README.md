# promisify-auth0-js

Promisifying wrapper around the Client Side Javascript toolkit for Auth0 API

## Install

From [npm](https://www.npmjs.com/package/promisify-auth0)

```
npm i --save promisify-auth0
```

## Basic Usage

The package is mirroring the original [auth0.js](https://github.com/auth0/auth0.js) API. The only difference is that instead of NodeJS callback function style, `promisify-auth0` allows you to get `Promise<T>` instead which help avoid callback hell and play nicely with `async/await`.

You will still need to create an original Auth0 objects and inject them into the corresponding wrapping types, something like this:

```ts
import { Authentication as NativeAuthentication } from 'auth0-js';
import { Authentication } from 'promisify-auth0';

const nativeAuthentication: NativeAuthentication = ...;
const authentication = new Authentication(nativeAuthentication);

const options = { realm: '...', audience: '...', username: '...', password: '...', scope: '...' };

authentication.login(options)
  .then(loginResult => {
    // ...
  })
  .catch(caughtError => {
    // ...
  });
```

The last piece of code could be rewritten in a more imperative style while maintaining the asyncronous execution model.

```ts
try {
  const loginResult = await authentication.login(options);
  // ...
} catch (caughtError) {
  // ...
}
```

## License and other

This code is distributed under [MIT license](https://github.com/another-guy/promisify-auth0/blob/master/LICENSE).

Please respect the [Code of Conduct](https://github.com/another-guy/promisify-auth0/blob/master/CODE_OF_CONDUCT.md).

Feel free to [contribute](https://github.com/another-guy/promisify-auth0/blob/master/CONTRIBUTING.md).
