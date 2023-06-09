// Session
import sessionController from "./session/session.controller";

// Users
import createUserController from "./users/createUser.controller";
import deleteUserController from "./users/deleteUser.controller";
import listUsersController from "./users/listUsers.controller";
import updateUserController from "./users/updateUser.controller";
import userIdController from "./users/userId.controller";

// Contacts
import createContactController from "./contacts/createContact.controller";
import listContactsController from "./contacts/listContacts.controller";
import listContactsUserController from "./contacts/listContactsUser.controller";
import contactIdController from "./contacts/contactId.controller";
import deleteContactController from "./contacts/deleteContact.controller";
import updateContactController from "./contacts/updateContact.controller";

// Phones
import createPhoneController from "./phones/createPhone.controller";

// Emails
import createEmailController from "./emails/createEmail.controller";
import deleteEmailController from "./emails/deleteEmail.controller";
import deletePhoneController from "./phones/deletePhone.controller";

export {
  sessionController,
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
  userIdController,
  createContactController,
  listContactsController,
  listContactsUserController,
  contactIdController,
  deleteContactController,
  updateContactController,
  createPhoneController,
  deletePhoneController,
  createEmailController,
  deleteEmailController,
};
