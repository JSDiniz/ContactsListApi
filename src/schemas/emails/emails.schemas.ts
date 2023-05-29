import * as Yup from "yup";
import { SchemaOf } from "yup";
import { IEmailsReq, IEmailsRes, IEmails } from "../../interfaces";

const emailsSchemaReq: SchemaOf<IEmailsReq> = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido")
    .max(60)
    .required("E-mail obrigatorio"),
});

const emailsSchemaRes: SchemaOf<IEmailsRes> = Yup.object().shape({
  updatedAt: Yup.date().notRequired(),
  createdAt: Yup.date().notRequired(),
  email: Yup.string().notRequired(),
  id: Yup.string().notRequired().notRequired(),
});

const updateEmailsSchemaReq: SchemaOf<IEmails> = Yup.object().shape({
  email: Yup.string().notRequired(),
  id: Yup.string().notRequired().notRequired(),
});

const emailsSchema: SchemaOf<IEmailsReq[]> = Yup.array(emailsSchemaReq);

export {
  emailsSchemaReq,
  emailsSchemaRes,
  updateEmailsSchemaReq,
  emailsSchema,
};
