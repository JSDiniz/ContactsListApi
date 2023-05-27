import { Router } from "express";
import {
  createContactController,
  listContactsController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  contactExistMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
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

export default contactRouter;
