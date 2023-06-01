import { IUser } from "../users/users.interfaces";

export interface ISessionReq {
  email: string;
  password: string;
}

export interface ISessionRes {
  token: string;
  user: IUser;
}
