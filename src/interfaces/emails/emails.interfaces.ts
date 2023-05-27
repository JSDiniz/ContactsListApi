export interface IEmailsReq {
  email: string;
}

export interface IEmailsRes {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
