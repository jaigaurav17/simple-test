import {UserRepository} from '../data/repositories';
import {User} from '../data/models';

const userRepository = new UserRepository();

export const AuthenticationService = {
  login: async (username: string, password: string): Promise<User> => {
    try {
      const user = await userRepository.findByCredentials(username, password);

      if (user) {
        return user;
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      throw error;
    }
  },
};
