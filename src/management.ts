import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class Management {

  getUser: (userId: string) => Promise<any> =
    promisify(this.wm.getUser);

  patchUserMetadata: (userId: string, userMetadata: any) => Promise<a0.Auth0UserProfile> =
    promisify(this.wm.patchUserMetadata);

  linkUser: (userId: string, secondaryUserToken: string) => Promise<any> =
    promisify(this.wm.linkUser);

  constructor(private wm: a0.Management) { }

}
