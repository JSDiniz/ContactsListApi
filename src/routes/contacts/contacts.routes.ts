import { Router } from "express";
import {
  contactIdController,
  createContactController,
  deleteContactController,
  listContactsController,
  listContactsUserController,
  updateContactController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  contactExistMiddleware,
  contactNotExistMiddleware,
  userIsActiveMiddleware,
  userNotExistsMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyUserOrAdminMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
} from "../../middlewares";
import { contactSchemaReq, updatecontactSchemasReq } from "../../schemas";

const contactRouter = Router();

contactRouter.post(
  "",
  validTokenMiddleware,
  validDataMiddleware(contactSchemaReq),
  contactExistMiddleware,
  createContactController
);

contactRouter.get(
  "",
  validTokenMiddleware,
  adminAuthMiddleware,
  listContactsController
);

contactRouter.get(
  "/:id/user",
  validTokenMiddleware,
  userNotExistsMiddleware,
  userIsActiveMiddleware,
  verifyUserOrAdminMiddleware,
  listContactsUserController
);

contactRouter.get(
  "/:id",
  validTokenMiddleware,
  contactNotExistMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
  contactIdController
);

contactRouter.patch(
  "/:id",
  validTokenMiddleware,
  contactNotExistMiddleware,
  validDataMiddleware(updatecontactSchemasReq),
  verifyYouOwnerTheContactOrAdminMiddleware,
  updateContactController
);

contactRouter.delete(
  "/:id",
  validTokenMiddleware,
  contactNotExistMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
  deleteContactController
);

export default contactRouter;
