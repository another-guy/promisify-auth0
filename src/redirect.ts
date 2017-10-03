import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class Redirect {

  loginWithCredentials: (options: any) => Promise<any> =
    promisify(this.wr.loginWithCredentials);

  signupAndLogin: (options: any) => Promise<any> =
    promisify(this.wr.signupAndLogin);

  constructor(private wr: a0.Redirect) { }

}
