import * as a0 from 'auth0-js';

import { cb } from './cb';

export class PasswordlessAuthentication {

  buildVerifyUrl = this.wpa.buildVerifyUrl;

  constructor(private wpa: a0.PasswordlessAuthentication) { }

  start(options: a0.PasswordlessStartOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wpa.start(options, cb(resolve, reject)));
  }

  verify(options: a0.PasswordlessVerifyOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wpa.verify(options, cb(resolve, reject)));
  }

}
