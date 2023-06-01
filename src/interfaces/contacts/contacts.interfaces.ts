import { IEmails, IEmailsReq, IEmailsRes } from "../emails/emails.interfaces";
import { IPhones, IPhonesReq, IPhonesRes } from "../phones/phones.interfaces";
import { IUserContactsAdmin } from "../users/users.interfaces";

export interface IContactsReq {
  name: string;
  phones: Array<IPhonesReq>;
  emails: Array<IEmailsReq>;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

export interface IContactsRes {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  phones: Array<IPhonesRes>;
  emails: Array<IEmailsRes>;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

export interface IContactsuserRes extends IContactsRes {
  users: IUserContactsAdmin;
}

export interface IUpdateContact {
  name?: string;
  phones?: Array<IPhones>;
  emails?: Array<IEmails>;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}

export interface IContact {
  id: string;
  name: string;
  phones: Array<IPhones>;
  emails: Array<IEmails>;
  imageUrl?: string | null | undefined;
  githubUrl?: string | null | undefined;
  linkedinUrl?: string | null | undefined;
  portfolioUrl?: string | null | undefined;
}
