import { Router } from "express";
import {
  createEmailController,
  deleteEmailController,
} from "../../controllers";
import {
  contactNotExistMiddleware,
  emailExistMiddleware,
  emailNotExistMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
} from "../../middlewares";
import { emailsSchema } from "../../schemas";

const emailRouter = Router();

emailRouter.post(
  "/:id/contact",
  validTokenMiddleware,
  validDataMiddleware(emailsSchema),
  contactNotExistMiddleware,
  emailExistMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
  createEmailController
);

emailRouter.delete(
  "/:id",
  validTokenMiddleware,
  emailNotExistMiddleware,
  deleteEmailController
);

export default emailRouter;
