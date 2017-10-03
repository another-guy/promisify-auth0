import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class CrossOriginAuthentication {

  callback = this.wcaa.callback;

  login: (options: a0.CrossOriginLoginOptions) => Promise<any> =
    promisify(this.wcaa.login);

  constructor(private wcaa: a0.CrossOriginAuthentication) { }

}
