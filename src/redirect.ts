import * as a0 from 'auth0-js';

import { cb } from './cb';

export class Redirect {

  constructor(private wr: a0.Redirect) { }

  loginWithCredentials(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wr.loginWithCredentials(options, cb(resolve, reject)));
  }

  signupAndLogin(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wr.signupAndLogin(options, cb(resolve, reject)));
  }
}
