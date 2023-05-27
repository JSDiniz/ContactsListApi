import { Router } from "express";
import {
  createContactController,
  listContactsController,
  listContactsIdController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  contactExistMiddleware,
  userExistsMiddleware,
  userIsActiveMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyUserOrAdminMiddleware,
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
  "/:id",
  validTokenMiddleware,
  userExistsMiddleware,
  userIsActiveMiddleware,
  verifyUserOrAdminMiddleware,
  listContactsIdController
);

export default contactRouter;
