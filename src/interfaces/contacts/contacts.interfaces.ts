import {
  IEmailsReq,
  IEmailsRes,
  IUpdateEmailsRes,
} from "../emails/emails.interfaces";
import {
  IPhonesReq,
  IPhonesRes,
  IUpdatePhones,
} from "../phones/phones.interfaces";
import { IUserRes } from "../users/users.interfaces";

export interface IContactsReq {
  name: string;
  phones: Array<IPhonesReq>;
  emails: Array<IEmailsReq>;
  imageUrl: string;
}

export interface IContactsRes {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  phones: Array<IPhonesRes>;
  emails: Array<IEmailsRes>;
  imageUrl: string;
}

export interface IContactsuserRes extends IContactsRes {
  users: IUserRes;
}

export interface IUpdateContact {
  id: string;
  name: string;
  phones: Array<IUpdatePhones>;
  emails: Array<IUpdateEmailsRes>;
  imageUrl: string;
}
