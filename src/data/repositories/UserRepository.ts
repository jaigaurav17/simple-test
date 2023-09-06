import {User} from '../models';

export class UserRepository {
  private users: User[];

  constructor() {
    this.users = [
      {username: 'user1', password: 'password1'},
      {username: 'user2', password: 'password2'},
    ];
  }

  async findByCredentials(
    username: string,
    password: string,
  ): Promise<User | undefined> {
    return this.users.find(
      user => user.username === username && user.password === password,
    );
  }
}
