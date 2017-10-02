import * as a0 from 'auth0-js';

import { cb } from './cb';

export class Popup {

  buildPopupHandler = this.wp.buildPopupHandler;
  preload = this.wp.preload;
  callback = this.wp.callback;

  constructor(private wp: a0.Popup) { }

  authorize(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wp.authorize(options, cb(resolve, reject)));
  }

  loginWithCredentials(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wp.loginWithCredentials(options, cb(resolve, reject)));
  }

  passwordlessVerify(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wp.passwordlessVerify(options, cb(resolve, reject)));
  }

  signupAndLogin(options: any): Promise<any> {
    return new Promise((resolve, reject) => this.wp.signupAndLogin(options, cb(resolve, reject)));
  }

}
