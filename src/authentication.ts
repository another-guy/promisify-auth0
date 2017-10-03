import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

import { DbConnection } from './db-connection';
import { PasswordlessAuthentication } from './passwordless-authentication';

export class Authentication {

  buildAuthorizeUrl = this.wa.buildAuthorizeUrl;
  buildLogoutUrl = this.wa.buildLogoutUrl;

  loginWithDefaultDirectory: (options: a0.DefaultDirectoryLoginOptions) => Promise<any> =
    promisify(this.wa.loginWithDefaultDirectory);

  login: (options: a0.DefaultLoginOptions) => Promise<any> =
    promisify(this.wa.login);

  oauthToken: (options: any) => Promise<any> =
    promisify(this.wa.oauthToken);

  loginWithResourceOwner: (options: a0.ResourceOwnerLoginOptions) => Promise<any> =
    promisify(this.wa.loginWithResourceOwner);

  userInfoptions: (accessToken: string) => Promise<a0.Auth0UserProfile> =
    promisify(this.wa.userInfo);

  delegation: (options: a0.DelegationOptions) => Promise<a0.Auth0DelegationToken> =
    promisify(this.wa.delegation);

  getUserCountry: () => Promise<{ countryCode: string; }> =
    promisify(this.wa.getUserCountry);

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
