import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class PasswordlessAuthentication {

  /**
   * Builds and returns the passwordless TOTP verify url in order to initialize a new authN/authZ transaction
   */
  buildVerifyUrl = this.wpa.buildVerifyUrl;

  /**
   * Initializes a new passwordless authN/authZ transaction
   */
  start: (options: a0.PasswordlessStartOptions) => Promise<any> =
    promisify(this.wpa.start);

  /**
   * Verifies the passwordless TOTP and returns an error if any.
   */
  verify: (options: a0.PasswordlessVerifyOptions) => Promise<any> =
    promisify(this.wpa.verify);

  constructor(private wpa: a0.PasswordlessAuthentication) { }
}
