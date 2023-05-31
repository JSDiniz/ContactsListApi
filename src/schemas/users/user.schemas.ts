import * as Yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserContacts,
  IUserReq,
  IUserRes,
  IUserUpdate,
} from "../../interfaces";
import { contactSchemaRes } from "../contacts/contacts.schemas";

const userSchemasReq: SchemaOf<IUserReq> = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome deve ter mais de 3 letras")
    .max(60)
    .required("Nome Obrigatorio"),
  email: Yup.string()
    .email("E-mail inválido")
    .max(60)
    .required("E-mail obrigatorio"),
  password: Yup.string().max(120).required("Senha Obrigatória"),
  phone: Yup.string()
    .max(20)
    .required("Telefone Obrigatorio")
    .matches(
      /^[0-9]([0-9]{8}|[0-9]{9})/,
      "Deve ser um número de telefone válido"
    ),
  imageUrl: Yup.string().notRequired(),
});

const userSchemasRes: SchemaOf<IUserRes> = Yup.object().shape({
  updatedAt: Yup.date().notRequired(),
  createdAt: Yup.date().notRequired(),
  isActive: Yup.boolean().notRequired(),
  isAdmin: Yup.boolean().notRequired(),
  imageUrl: Yup.string().nullable().notRequired(),
  phone: Yup.string().notRequired(),
  email: Yup.string().email().notRequired(),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

const userContactSchema: SchemaOf<IUserContacts> = Yup.object().shape({
  contacts: Yup.array().of(contactSchemaRes).notRequired(),
  updatedAt: Yup.date().notRequired(),
  createdAt: Yup.date().notRequired(),
  isActive: Yup.boolean().notRequired(),
  isAdmin: Yup.boolean().notRequired(),
  imageUrl: Yup.string().nullable().notRequired(),
  phone: Yup.string().notRequired(),
  email: Yup.string().email().notRequired(),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

const allUsersSchema: SchemaOf<IUserContacts[]> = Yup.array(userContactSchema);

const updateUserSchemasReq: SchemaOf<IUserUpdate> = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome deve ter mais de 3 letras")
    .max(60)
    .notRequired(),
  email: Yup.string().email("E-mail inválido").max(60).notRequired(),
  password: Yup.string().max(120).notRequired(),
  phone: Yup.string()
    .max(20)
    .notRequired()
    .matches(
      /^[0-9]([0-9]{8}|[0-9]{9})/,
      "Deve ser um número de telefone válido"
    ),
  imageUrl: Yup.string().notRequired(),
  isAdmin: Yup.boolean().notRequired(),
  isActive: Yup.boolean().notRequired(),
});

export {
  userSchemasReq,
  userSchemasRes,
  userContactSchema,
  allUsersSchema,
  updateUserSchemasReq,
};
