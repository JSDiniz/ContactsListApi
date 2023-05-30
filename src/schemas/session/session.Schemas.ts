import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISessionReq, IUser } from "../../interfaces";
import { updatecontactSchemasReq } from "../contacts/contacts.schemas";

const sessionSchemaReq: SchemaOf<ISessionReq> = yup.object().shape({
  email: yup.string().email("Must be a valid email").max(60).required(),
  password: yup.string().required(),
});

const sessionSchemaRes: SchemaOf<IUser> = yup.object().shape({
  contacts: yup.array(updatecontactSchemasReq).notRequired(),
  name: yup.string().notRequired(),
  id: yup.string().notRequired(),
});

export { sessionSchemaReq, sessionSchemaRes };
