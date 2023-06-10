import * as Yup from "yup";
import { SchemaOf } from "yup";
import { ISessionReq, IUser } from "../../interfaces";
import { contactSchemas } from "../contacts/contacts.schemas";

const sessionSchemaReq: SchemaOf<ISessionReq> = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").max(60).required(),
  password: Yup.string().required(),
});

const sessionSchemaRes: SchemaOf<IUser> = Yup.object().shape({
  contacts: Yup.array(contactSchemas).notRequired(),
  email: Yup.string().email().notRequired(),
  phone: Yup.string().notRequired(),
  name: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

export { sessionSchemaReq, sessionSchemaRes };
