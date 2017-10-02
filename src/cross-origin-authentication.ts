import * as a0 from 'auth0-js';

import { cb } from './cb';

export class CrossOriginAuthentication {

  callback = this.wcaa.callback;

  constructor(private wcaa: a0.CrossOriginAuthentication) { }

  login(options: a0.CrossOriginLoginOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wcaa.login(options, cb(resolve, reject)));
  }

}
