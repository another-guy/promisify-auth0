import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class Popup {

  /**
   * Returns a new instance of the popup handler
   */
  buildPopupHandler = this.wp.buildPopupHandler;

  /**
   * Initializes the popup window and returns the instance to be used later in order to avoid
   * being blocked by the browser.
   */
  preload = this.wp.preload;

  /**
   * Handles the popup logic for the callback page.
   */
  callback = this.wp.callback;

  /**
   * Shows inside a new window the hosted login page (`/authorize`) in order to start a new authN/authZ
   * transaction and post its result using `postMessage`.
   */
  authorize: (options: any) => Promise<any> =
    promisify(this.wp.authorize);

  /**
   * Performs authentication with username/email and password with a database connection inside a new window
   *
   * This method is not compatible with API Auth so if you need to fetch API tokens with audience
   * you should use {@link authorize} or {@link login}.
   */
  loginWithCredentials: (options: any) => Promise<any> =
    promisify(this.wp.loginWithCredentials);

  /**
   * Verifies the passwordless TOTP and returns the requested token
   */
  passwordlessVerify: (options: any) => Promise<any> =
    promisify(this.wp.passwordlessVerify);

  /**
   * Signs up a new user and automatically logs the user in after the signup.
   *
   * This method is not compatible with API Auth so if you need to fetch API tokens with audience
   * you should use {@link authorize} or {@link signupAndAuthorize}.
   */
  signupAndLogin: (options: any) => Promise<any> =
    promisify(this.wp.signupAndLogin);

  constructor(private wp: a0.Popup) { }
}
