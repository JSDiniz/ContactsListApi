import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
  userIdController,
} from "../../controllers";
import {
  adminAuthMiddleware,
  userDataUpdateMiddleware,
  userExistsMiddleware,
  userIsActiveMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyUserOrAdminMiddleware,
} from "../../middlewares";
import { updateUserSchemasReq, userSchemasReq } from "../../schemas";

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
  userIsActiveMiddleware,
  verifyUserOrAdminMiddleware,
  userIdController
);

userRouter.patch(
  "/:id",
  validTokenMiddleware,
  userDataUpdateMiddleware,
  validDataMiddleware(updateUserSchemasReq),
  userExistsMiddleware,
  userIsActiveMiddleware,
  verifyUserOrAdminMiddleware,
  updateUserController
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
