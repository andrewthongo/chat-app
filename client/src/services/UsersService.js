import { baseService } from "./base";

export class UsersService extends baseService {
  login = (data) => {
    return this.post("/users/login", data);
  };
  register = (data) => {
    return this.post("/users/register", data);
  };
  getUser = () => {};
}

export const usersService = new UsersService();
