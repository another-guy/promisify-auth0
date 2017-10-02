import * as a0 from 'auth0-js';

import { Authentication } from './authentication';
import { cb } from './cb';
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

  authorize = this.wa.authorize;
  crossOriginAuthenticationCallback = this.wa.crossOriginAuthenticationCallback;
  logout = this.wa.logout;

  constructor(private wa: a0.WebAuth) { }

  parseHash(): Promise<a0.Auth0DecodedHash>;
  parseHash(options?: a0.ParseHashOptions): Promise<a0.Auth0DecodedHash> {
    return new Promise(
        (resolve, reject) => (options !== undefined ?
          this.wa.parseHash(options, cb(resolve, reject)) :
          this.wa.parseHash(cb(resolve, reject))));
  }

  validateToken(token: string, nonce: string): Promise<any> {
    return new Promise((resolve, reject) => this.wa.validateToken(token, nonce, cb(resolve, reject)));
  }

  renewAuth(options: a0.RenewAuthOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.renewAuth(options, cb(resolve, reject)));
  }

  changePassword(options: a0.ChangePasswordOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.changePassword(options, cb(resolve, reject)));
  }

  signup(options: a0.DbSignUpOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.signup(options, cb(resolve, reject)));
  }

  signupAndAuthorize(options: a0.DbSignUpOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.signupAndAuthorize(options, cb(resolve, reject)));
  }

  login(options: a0.CrossOriginLoginOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.login(options, cb(resolve, reject)));
  }

  passwordlessStart(options: a0.PasswordlessStartOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.passwordlessStart(options, cb(resolve, reject)));
  }

  passwordlessVerify(options: a0.PasswordlessVerifyOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.passwordlessVerify(options, cb(resolve, reject)));
  }
}
