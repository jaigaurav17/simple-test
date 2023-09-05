import {AuthenticationService} from '../services';
import store from '../redux/store';
import {authActions} from '../redux/slices';

export class LoginViewModel {
  static async login(username: string, password: string): Promise<void> {
    try {
      const user = await AuthenticationService.login(username, password);
      console.log(`user::${user}`);
      store.dispatch(authActions.loginSuccess(user));
    } catch (error: any) {
      console.log(`user login error::${error.message}`);
      store.dispatch(authActions.loginFailure(error.message));
    }
  }
}
