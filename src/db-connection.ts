import * as a0 from 'auth0-js';

import { cb } from './cb';

export class DbConnection {

  constructor(private wdbc: a0.DBConnection) { }

  signup(options: a0.DbSignUpOptions): Promise<any> {
    return new Promise<any>((resolve, reject) => this.wdbc.signup(options, cb(resolve, reject)));
  }

  changePassword(options: a0.ChangePasswordOptions): Promise<any> {
    return new Promise<any>((resolve, reject) => this.wdbc.changePassword(options, cb(resolve, reject)));
  }

}
