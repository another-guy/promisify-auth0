import * as a0 from 'auth0-js';
import { promisify } from 'typed-promisify';

export class DbConnection {

  signup: (options: a0.DbSignUpOptions) => Promise<any> =
    promisify(this.wdbc.signup);

  changePassword: (options: a0.ChangePasswordOptions) => Promise<any> =
    promisify(this.wdbc.changePassword);

  constructor(private wdbc: a0.DBConnection) { }

}
