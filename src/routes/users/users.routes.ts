import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  userIdController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  userExistsMiddleware,
  userIsActiveMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyUserOrAdminMiddleware,
} from "../../middlewares";
import { userSchemasReq } from "../../schemas";

const userRouter = Router();

userRouter.post("", validDataMiddleware(userSchemasReq), createUserController);

userRouter.get(
  "",
  validTokenMiddleware,
  adminAuthMiddleware,
  listUsersController
);

userRouter.get(
  "/:id",
  validTokenMiddleware,
  userExistsMiddleware,
  userIdController
);

userRouter.delete(
  "/:id",
  validTokenMiddleware,
  userExistsMiddleware,
  verifyUserOrAdminMiddleware,
  userIsActiveMiddleware,
  deleteUserController
);

export default userRouter;
