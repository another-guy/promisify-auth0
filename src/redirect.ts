import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class Redirect {

  /**
   * Performs authentication with username/email and password with a database connection
   *
   * This method is not compatible with API Auth so if you need to fetch API tokens with audience
   * you should use {@link authorize} or {@link login}.
   */
  loginWithCredentials: (options: any) => Promise<any> =
    promisify(this.wr.loginWithCredentials);

  /**
   * Signs up a new user and automatically logs the user in after the signup.
   */
  signupAndLogin: (options: any) => Promise<any> =
    promisify(this.wr.signupAndLogin);

  constructor(private wr: a0.Redirect) { }

}
