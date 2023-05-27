import * as Yup from "yup";
import { SchemaOf } from "yup";
import { IEmailsReq, IEmailsRes } from "../../interfaces";

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

export { emailsSchemaReq, emailsSchemaRes };
