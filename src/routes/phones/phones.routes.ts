import { Router } from "express";
import {
  createPhoneController,
  deletePhoneController,
} from "../../controllers";
import {
  contactNotExistMiddleware,
  phoneExistMiddleware,
  phoneNotExistMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
} from "../../middlewares";
import { phonesSchema } from "../../schemas";

const phoneRouter = Router();

phoneRouter.post(
  "/:id",
  validTokenMiddleware,
  validDataMiddleware(phonesSchema),
  contactNotExistMiddleware,
  phoneExistMiddleware,
  verifyYouOwnerTheContactOrAdminMiddleware,
  createPhoneController
);

phoneRouter.delete(
  "/:id",
  validTokenMiddleware,
  phoneNotExistMiddleware,
  deletePhoneController
);

export default phoneRouter;
