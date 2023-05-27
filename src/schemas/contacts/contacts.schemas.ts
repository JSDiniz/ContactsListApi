import * as Yup from "yup";
import { SchemaOf } from "yup";
import { IContactsReq, IContactsRes } from "../../interfaces";
import { phonesSchemaReq, phonesSchemaRes } from "../phones/phones.schemas";
import { emailsSchemaReq, emailsSchemaRes } from "../emails/emails.schemas";
import { userSchemasRes } from "../users/user.schemas";

const contactSchemaReq: SchemaOf<IContactsReq> = Yup.object().shape({
  name: Yup.string().max(60).required(),
  phones: Yup.array().of(phonesSchemaReq).required(),
  emails: Yup.array().of(emailsSchemaReq).required(),
  imageUrl: Yup.string().notRequired().nullable(true),
});

const contactSchemaRes: SchemaOf<IContactsRes> = Yup.object().shape({
  emails: Yup.array().of(emailsSchemaRes).notRequired(),
  phones: Yup.array().of(phonesSchemaRes).notRequired(),
  users: userSchemasRes.notRequired(),
  createdAt: Yup.date().notRequired(),
  updatedAt: Yup.date().notRequired(),
  imageUrl: Yup.string().nullable(true).notRequired(),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

export { contactSchemaReq, contactSchemaRes };
