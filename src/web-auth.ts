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

  authorize = this.wa.authorize;
  crossOriginAuthenticationCallback = this.wa.crossOriginAuthenticationCallback;
  logout = this.wa.logout;

  parseHash: (options?: a0.ParseHashOptions | undefined) => Promise<a0.Auth0DecodedHash> =
    promisify(this.wa.parseHash);

  validateToken: (token: string, nonce: string) => Promise<any> =
    promisify(this.wa.validateToken);

  renewAuth: (options: a0.RenewAuthOptions) => Promise<any> =
    promisify(this.wa.renewAuth);

  changePassword: (options: a0.ChangePasswordOptions) => Promise<any> =
    promisify(this.wa.changePassword);

  signup: (options: a0.DbSignUpOptions) => Promise<any> =
    promisify(this.wa.signup);

  signupAndAuthorize: (options: a0.DbSignUpOptions) => Promise<any> =
    promisify(this.wa.signupAndAuthorize);

  login: (options: a0.CrossOriginLoginOptions) => Promise<any> =
    promisify(this.wa.login);

  passwordlessStart: (options: a0.PasswordlessStartOptions) => Promise<any> =
    promisify(this.wa.passwordlessStart);

  passwordlessVerify: (options: a0.PasswordlessVerifyOptions) => Promise<any> =
    promisify(this.wa.passwordlessVerify);

  constructor(private wa: a0.WebAuth) { }

}
