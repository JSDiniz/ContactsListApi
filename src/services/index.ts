// Session
import sessionService from "./session/session.service";

// Users
import createUserService from "./users/createUser.service";
import deleteUserService from "./users/deleteUser.service";
import listUsersService from "./users/listUsers.service";
import updateUserService from "./users/updateUser.service";
import userIdService from "./users/userId.service";

// Contacts
import createContactService from "./contacts/createContact.service";
import listContactsService from "./contacts/listContacts.service";
import listContactsUserService from "./contacts/listContactsUser.service";
import contactIdService from "./contacts/contactId.service";
import deleteContactService from "./contacts/deleteContact.service";
import updateContactService from "./contacts/updateContact.service";

// Emails
import createEmailsService from "./emails/createEmails.service";
import deleteEmailService from "./emails/deleteEmail.service";
import createPhonesService from "./phones/createPhones.service";
import deletePhoneService from "./phones/deletePhone.service";

export {
  sessionService,
  createUserService,
  deleteUserService,
  listUsersService,
  updateUserService,
  userIdService,
  createContactService,
  listContactsService,
  listContactsUserService,
  contactIdService,
  deleteContactService,
  updateContactService,
  createPhonesService,
  deletePhoneService,
  createEmailsService,
  deleteEmailService,
};
