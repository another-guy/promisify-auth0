import * as a0 from 'auth0-js';

export function cb<TResult>(
  resolve: (reason: TResult) => void,
  reject: (reason: a0.Auth0Error) => void,
): a0.Auth0Callback<TResult> {
  return (error, result) => error ? reject(error) : resolve(result);
}
