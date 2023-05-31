import * as Yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactsReq,
  IContactsRes,
  IContactsuserRes,
  IUpdateContact,
} from "../../interfaces";
import {
  phonesSchemaReq,
  phonesSchemaRes,
  updatePhonesSchemaRes,
} from "../phones/phones.schemas";
import {
  emailsSchemaReq,
  emailsSchemaRes,
  updateEmailsSchemaReq,
} from "../emails/emails.schemas";
import { userSchemasRes } from "../users/user.schemas";

const contactSchemaReq: SchemaOf<IContactsReq> = Yup.object().shape({
  name: Yup.string().max(60).required(),
  phones: Yup.array().of(phonesSchemaReq).required(),
  emails: Yup.array().of(emailsSchemaReq).required(),
  imageUrl: Yup.string().notRequired().nullable(true),
  githubUrl: Yup.string().notRequired().nullable(true),
  linkedinUrl: Yup.string().notRequired().nullable(true),
});

const contactSchemaRes: SchemaOf<IContactsRes> = Yup.object().shape({
  emails: Yup.array().of(emailsSchemaRes).notRequired(),
  phones: Yup.array().of(phonesSchemaRes).notRequired(),
  createdAt: Yup.date().notRequired(),
  updatedAt: Yup.date().notRequired(),
  imageUrl: Yup.string().notRequired().nullable(true),
  githubUrl: Yup.string().notRequired().nullable(true),
  linkedinUrl: Yup.string().notRequired().nullable(true),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

const contactUserSchemaRes: SchemaOf<IContactsuserRes> = Yup.object().shape({
  emails: Yup.array().of(emailsSchemaRes).notRequired(),
  phones: Yup.array().of(phonesSchemaRes).notRequired(),
  users: Yup.object().shape({
    email: Yup.string().email().notRequired(),
    name: Yup.string().notRequired(),
    id: Yup.string().notRequired(),
  }),
  createdAt: Yup.date().notRequired(),
  updatedAt: Yup.date().notRequired(),
  imageUrl: Yup.string().notRequired().nullable(true),
  githubUrl: Yup.string().notRequired().nullable(true),
  linkedinUrl: Yup.string().notRequired().nullable(true),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

const allsContactsSchema: SchemaOf<IContactsuserRes[]> =
  Yup.array(contactUserSchemaRes);

const contactsIdSchema: SchemaOf<IContactsRes[]> = Yup.array(contactSchemaRes);

const updatecontactSchemasReq: SchemaOf<IUpdateContact> = Yup.object().shape({
  imageUrl: Yup.string().notRequired().nullable(true),
  githubUrl: Yup.string().notRequired().nullable(true),
  linkedinUrl: Yup.string().notRequired().nullable(true),
  emails: Yup.array().of(updateEmailsSchemaReq).notRequired(),
  phones: Yup.array().of(updatePhonesSchemaRes).notRequired(),
  name: Yup.string().notRequired(),
});

const contactSchemas: SchemaOf<IContact> = Yup.object().shape({
  imageUrl: Yup.string().notRequired().nullable(true),
  githubUrl: Yup.string().notRequired().nullable(true),
  linkedinUrl: Yup.string().notRequired().nullable(true),
  emails: Yup.array().of(updateEmailsSchemaReq).notRequired(),
  phones: Yup.array().of(updatePhonesSchemaRes).notRequired(),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

export {
  contactSchemaReq,
  contactSchemaRes,
  contactUserSchemaRes,
  allsContactsSchema,
  contactsIdSchema,
  updatecontactSchemasReq,
  contactSchemas,
};
