import { Router } from "express";
import {
  createUserController,
  listUsersController,
  userIdController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  userExistsMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
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

export default userRouter;
