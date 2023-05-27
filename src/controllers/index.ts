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
import listContactsIdController from "./contacts/listContactsId.controller";

export {
  sessionController,
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
  userIdController,
  createContactController,
  listContactsController,
  listContactsIdController,
};
