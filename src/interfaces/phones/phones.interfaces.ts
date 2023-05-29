export interface IPhonesReq {
  phone: string;
}

export interface IPhonesRes {
  id: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdatePhones {
  id: string;
  phone: string;
}
