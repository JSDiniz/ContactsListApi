export interface IEmailsReq {
  email: string;
}

export interface IEmailsRes {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateEmailsRes {
  id: string;
  email: string;
}
