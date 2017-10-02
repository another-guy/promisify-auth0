import * as a0 from 'auth0-js';

import { cb } from './cb';
import { DbConnection } from './db-connection';
import { PasswordlessAuthentication } from './passwordless-authentication';

export class Authentication {

  buildAuthorizeUrl = this.wa.buildAuthorizeUrl;
  buildLogoutUrl = this.wa.buildLogoutUrl;

  constructor(private wa: a0.Authentication) { }

  get dbConnection(): DbConnection {
    return new DbConnection(this.wa.dbConnection);
  }

  get passwordless(): a0.PasswordlessAuthentication {
    return new PasswordlessAuthentication(this.wa.passwordless);
  }

  loginWithDefaultDirectory(options: a0.DefaultDirectoryLoginOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.loginWithDefaultDirectory(options, cb(resolve, reject)));
  }

  login(options: a0.DefaultLoginOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.login(options, cb(resolve, reject)));
  }

  oauthToken(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wa.oauthToken(options, cb(resolve, reject)));
  }

  loginWithResourceOwner(options: a0.ResourceOwnerLoginOptions): Promise<any> {
    return new Promise((resolve, reject) => this.wa.loginWithResourceOwner(options, cb(resolve, reject)));
  }

  getSSOData(): Promise<any>;
  getSSOData(withActiveDirectories?: boolean): Promise<any> {
    return new Promise(
      (resolve, reject) => (withActiveDirectories !== undefined ?
        this.wa.getSSOData(withActiveDirectories, cb(resolve, reject)) :
        this.wa.getSSOData(cb(resolve, reject))));
  }

  userInfo(accessToken: string): Promise<a0.Auth0UserProfile> {
    return new Promise((resolve, reject) => this.wa.userInfo(accessToken, cb(resolve, reject)));
  }

  delegation(options: a0.DelegationOptions): Promise<a0.Auth0DelegationToken> {
    return new Promise((resolve, reject) => this.wa.delegation(options, cb(resolve, reject)));
  }

  getUserCountry(): Promise<{ countryCode: string; }> {
    return new Promise((resolve, reject) => this.wa.getUserCountry(cb<{ countryCode: string; }>(resolve, reject)));
  }

}
