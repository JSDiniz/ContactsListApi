import { IContact, IContactsRes } from "../contacts/contacts.interfaces";

export interface IUserReq {
  name: string;
  email: string;
  password: string;
  phone: string;
  imageUrl?: string | null | undefined;
}

export interface IUserRes {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl?: string | null | undefined;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  imageUrl?: string | null | undefined;
  isAdmin?: boolean;
  isActive?: boolean;
}

export interface IUser {
  id: string;
  name: string;
  contacts: Array<IContact>;
}

export interface IUserContacts extends IUserRes {
  contacts: Array<IContactsRes>;
}
