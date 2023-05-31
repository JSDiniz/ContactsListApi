import { IEmails, IEmailsReq, IEmailsRes } from "../emails/emails.interfaces";
import { IPhones, IPhonesReq, IPhonesRes } from "../phones/phones.interfaces";
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
  name?: string;
  phones?: Array<IPhones>;
  emails?: Array<IEmails>;
  imageUrl?: string;
}

export interface IContact {
  id: string;
  name: string;
  phones: Array<IPhones>;
  emails: Array<IEmails>;
  imageUrl: string;
}
