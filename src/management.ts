import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class Management {

  /**
   * Returns the user profile. https://auth0.com/docs/api/management/v2#!/Users/get_users_by_id
   */
  getUser: (userId: string) => Promise<any> =
    promisify(this.wm.getUser);

  /**
   * Updates the user metdata. It will patch the user metdata with the attributes sent.
   * https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id
   */
  patchUserMetadata: (userId: string, userMetadata: any) => Promise<a0.Auth0UserProfile> =
    promisify(this.wm.patchUserMetadata);

  /**
   * Link two users. https://auth0.com/docs/api/management/v2#!/Users/post_identities
   */
  linkUser: (userId: string, secondaryUserToken: string) => Promise<any> =
    promisify(this.wm.linkUser);

  constructor(private wm: a0.Management) { }

}
