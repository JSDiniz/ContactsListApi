// Users
import {
  userSchemasReq,
  userSchemasRes,
  allUsersSchema,
  updateUserSchemasReq,
  userContactSchema,
} from "./users/user.schemas";

// Session
import { sessionSchemaReq, sessionSchemaRes } from "./session/session.Schemas";

// Contacts
import {
  allsContactsSchema,
  contactSchemaReq,
  contactSchemaRes,
  contactUserSchemaRes,
  contactsIdSchema,
  updatecontactSchemasReq,
} from "./contacts/contacts.schemas";

// Phones
import {
  phonesSchema,
  phonesSchemaReq,
  phonesSchemaRes,
  updatePhonesSchemaRes,
} from "./phones/phones.schemas";

// Emails
import {
  emailsSchema,
  emailsSchemaReq,
  emailsSchemaRes,
  updateEmailsSchemaReq,
} from "./emails/emails.schemas";

export {
  userSchemasReq,
  userSchemasRes,
  userContactSchema,
  allUsersSchema,
  updateUserSchemasReq,
  sessionSchemaReq,
  sessionSchemaRes,
  contactSchemaReq,
  contactSchemaRes,
  contactUserSchemaRes,
  allsContactsSchema,
  contactsIdSchema,
  updatecontactSchemasReq,
  phonesSchemaReq,
  phonesSchemaRes,
  updatePhonesSchemaRes,
  phonesSchema,
  emailsSchemaReq,
  emailsSchemaRes,
  updateEmailsSchemaReq,
  emailsSchema,
};
