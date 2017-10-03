import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class PasswordlessAuthentication {

  buildVerifyUrl = this.wpa.buildVerifyUrl;

  start: (options: a0.PasswordlessStartOptions) => Promise<any> =
    promisify(this.wpa.start);

  verify: (options: a0.PasswordlessVerifyOptions) => Promise<any> =
    promisify(this.wpa.verify);

  constructor(private wpa: a0.PasswordlessAuthentication) { }
}
