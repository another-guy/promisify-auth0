import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class CrossOriginAuthentication {

  /**
   * Runs the callback code for the cross origin authentication call.
   * This method is meant to be called by the cross origin authentication callback url.
   */
  callback = this.wcaa.callback;

  /**
   * Logs in the user with username and password using the cross origin authentication (/co/authenticate) flow.
   * You can use either `username` or `email` to identify the user, but `username` will take precedence over `email`.
   * This only works when 3rd party cookies are enabled in the browser.
   * After the /co/authenticate call, you'll have to use the {@link parseHash} function at the `redirectUri` specified
   * in the constructor.
   */
  login: (options: a0.CrossOriginLoginOptions) => Promise<any> =
    promisify(this.wcaa.login);

  constructor(private wcaa: a0.CrossOriginAuthentication) { }

}
