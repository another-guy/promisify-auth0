import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class Popup {

  buildPopupHandler = this.wp.buildPopupHandler;
  preload = this.wp.preload;
  callback = this.wp.callback;

  authorize: (options: any) => Promise<any> =
    promisify(this.wp.authorize);

  loginWithCredentials: (options: any) => Promise<any> =
    promisify(this.wp.loginWithCredentials);

  passwordlessVerify: (options: any) => Promise<any> =
    promisify(this.wp.passwordlessVerify);

  signupAndLogin: (options: any) => Promise<any> =
    promisify(this.wp.signupAndLogin);

  constructor(private wp: a0.Popup) { }
}
