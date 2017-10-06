import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

import { Authentication } from './authentication';
import { CrossOriginAuthentication } from './cross-origin-authentication';
import { Popup } from './popup';
import { Redirect } from './redirect';

export class WebAuth {

  get client(): Authentication {
    return new Authentication(this.wa.client);
  }

  get popup(): Popup {
    return new Popup(this.wa.popup);
  }

  get redirect(): Redirect {
    return new Redirect(this.wa.redirect);
  }

  get crossOriginAuthentication(): CrossOriginAuthentication {
    return new CrossOriginAuthentication(this.wa.crossOriginAuthentication);
  }

  /**
   * Redirects to the hosted login page (`/authorize`) in order to initialize a new authN/authZ transaction
   */
  authorize = this.wa.authorize;

  /**
   * Runs the callback code for the cross origin authentication call.
   * This method is meant to be called by the cross origin authentication callback url.
   */
  crossOriginAuthenticationCallback = this.wa.crossOriginAuthenticationCallback;

  /**
   * Redirects to the auth0 logout endpoint
   *
   * If you want to navigate the user to a specific URL after the logout, set that URL at the returnTo parameter.
   * The URL should be included in any the appropriate Allowed Logout URLs list:
   *
   * - If the client_id parameter is included, the returnTo URL must be listed in the Allowed Logout URLs set
   *   at the client level (see Setting Allowed Logout URLs at the App Level).
   * - If the client_id parameter is NOT included, the returnTo URL must be listed in the Allowed Logout URLs set
   *   at the account level (see Setting Allowed Logout URLs at the Account Level).
   */
  logout = this.wa.logout;

  /**
   * Parse the url hash and extract the returned tokens depending on the transaction.
   *
   * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
   * by the `/.well-known/jwks.json` endpoint. Id tokens signed with other algorithms will not be
   * accepted.
   */
  parseHash: (options?: a0.ParseHashOptions | undefined) => Promise<a0.Auth0DecodedHash> =
    promisify(this.wa.parseHash);

  /**
   * Decodes the id_token and verifies  the nonce.
   */
  validateToken: (token: string, nonce: string) => Promise<any> =
    promisify(this.wa.validateToken);

  /**
   * Executes a silent authentication transaction under the hood in order to fetch a new tokens for the current session.
   * This method requires that all Auth is performed with {@link authorize}
   * Watch out! If you're not using the hosted login page to do social logins, you have to use your own
   * [social connection keys](https://manage.auth0.com/#/connections/social).
   * If you use Auth0's dev keys, you'll always get `login_required` as an error when calling this method.
   */
  renewAuth: (options: a0.RenewAuthOptions) => Promise<any> =
    promisify(this.wa.renewAuth);

  /**
   * Initialices a change password transaction
   */
  changePassword: (options: a0.ChangePasswordOptions) => Promise<any> =
    promisify(this.wa.changePassword);

  /**
   * Signs up a new user
   */
  signup: (options: a0.DbSignUpOptions) => Promise<any> =
    promisify(this.wa.signup);

  /**
   * Signs up a new user, automatically logs the user in after the signup and returns the user token.
   * The login will be done using /oauth/token with password-realm grant type.
   */
  signupAndAuthorize: (options: a0.DbSignUpOptions) => Promise<any> =
    promisify(this.wa.signupAndAuthorize);

  /**
   * Logs in the user with username and password using the cross origin authentication (/co/authenticate) flow.
   * You can use either `username` or `email` to identify the user, but `username` will take precedence over `email`.
   * This only works when 3rd party cookies are enabled in the browser.
   * After the /co/authenticate call, you'll have to use the {@link parseHash} function at
   * the `redirectUri` specified in the constructor.
   */
  login: (options: a0.CrossOriginLoginOptions) => Promise<any> =
    promisify(this.wa.login);

  /**
   * Initialices a passwordless authentication transaction
   */
  passwordlessStart: (options: a0.PasswordlessStartOptions) => Promise<any> =
    promisify(this.wa.passwordlessStart);

  /**
   * Verifies the passwordless TOTP and redirects to finish the passwordless transaction
   */
  passwordlessVerify: (options: a0.PasswordlessVerifyOptions) => Promise<any> =
    promisify(this.wa.passwordlessVerify);

  constructor(private wa: a0.WebAuth) { }

}
