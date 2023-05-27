import { Router } from "express";
import {
  contactIdController,
  createContactController,
  deleteContactController,
  listContactsController,
  listContactsUserController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  contactExistMiddleware,
  contactNotExistMiddleware,
  userExistsMiddleware,
  userIsActiveMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyUserOrAdminMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
} from "../../middlewares";
import { contactSchemaReq } from "../../schemas";

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
  userExistsMiddleware,
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

contactRouter.delete(
  "/:id",
  validTokenMiddleware,
  contactNotExistMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
  deleteContactController
);

export default contactRouter;
