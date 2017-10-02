import * as a0 from 'auth0-js';

import { cb } from './cb';

export class Management {

  constructor(private wm: a0.Management) { }

  getUser(userId: string): Promise<any> {
    return new Promise((resolve, reject) => this.wm.getUser(userId, cb(resolve, reject)));
  }

  patchUserMetadata(userId: string, userMetadata: any): Promise<a0.Auth0UserProfile> {
    return new Promise((resolve, reject) => this.wm.patchUserMetadata(userId, userMetadata, cb(resolve, reject)));
  }

  linkUser(userId: string, secondaryUserToken: string): Promise<any> {
    return new Promise((resolve, reject) => this.wm.linkUser(userId, secondaryUserToken, cb(resolve, reject)));
  }
}
