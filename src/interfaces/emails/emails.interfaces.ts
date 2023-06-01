export interface IEmailsReq {
  email: string;
}

export interface IEmailsRes {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEmails {
  id: string;
  email: string;
}
