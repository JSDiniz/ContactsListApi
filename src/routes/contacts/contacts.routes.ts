import { Router } from "express";
import { createContactController } from "../../controllers";
import {
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

export default contactRouter;
