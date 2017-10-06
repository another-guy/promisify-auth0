import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

import { DbConnection } from './db-connection';
import { PasswordlessAuthentication } from './passwordless-authentication';

export class Authentication {

  /**
   * Builds and returns the `/authorize` url in order to initialize a new authN/authZ transaction
   */
  buildAuthorizeUrl = this.wa.buildAuthorizeUrl;

  /**
   * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
   */
  buildLogoutUrl = this.wa.buildLogoutUrl;

  /**
   * Makes a call to the `oauth/token` endpoint with `password` grant type
   */
  loginWithDefaultDirectory: (options: a0.DefaultDirectoryLoginOptions) => Promise<any> =
    promisify(this.wa.loginWithDefaultDirectory);

  /**
   * Makes a call to the `oauth/token` endpoint with `password-realm` grant type
   */
  login: (options: a0.DefaultLoginOptions) => Promise<any> =
    promisify(this.wa.login);

  /**
   * Makes a call to the `oauth/token` endpoint
   */
  oauthToken: (options: any) => Promise<any> =
    promisify(this.wa.oauthToken);

  /**
   * Makes a call to the `/ro` endpoint
   * @deprecated `loginWithResourceOwner` will be soon deprecated, user `login` instead.
   */
  loginWithResourceOwner: (options: a0.ResourceOwnerLoginOptions) => Promise<any> =
    promisify(this.wa.loginWithResourceOwner);

  /**
   * Makes a call to the `/userinfo` endpoint and returns the user profile
   */
  userInfo: (accessToken: string) => Promise<a0.Auth0UserProfile> =
    promisify(this.wa.userInfo);

  /**
   * Makes a call to the `/delegation` endpoint
   */
  delegation: (options: a0.DelegationOptions) => Promise<a0.Auth0DelegationToken> =
    promisify(this.wa.delegation);

  /**
   * Fetches the user country based on the ip.
   */
  getUserCountry: () => Promise<{ countryCode: string; }> =
    promisify(this.wa.getUserCountry);

  /**
   * Makes a call to the `/ssodata` endpoint
   */
  getSSOData: (withActiveDirectories: boolean | undefined) => Promise<any> =
    promisify(this.wa.getSSOData);

  constructor(private wa: a0.Authentication) { }

  get dbConnection(): DbConnection {
    return new DbConnection(this.wa.dbConnection);
  }

  get passwordless(): a0.PasswordlessAuthentication {
    return new PasswordlessAuthentication(this.wa.passwordless);
  }

}
