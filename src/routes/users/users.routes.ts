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
  updateUserIsActiveOrAdminMiddleware,
  userDataUpdateMiddleware,
  userExistsMiddleware,
  userIsActiveMiddleware,
  userNotExistsMiddleware,
  validDataMiddleware,
  validTokenMiddleware,
  verifyUserOrAdminMiddleware,
} from "../../middlewares";
import { updateUserSchemasReq, userSchemasReq } from "../../schemas";

const userRouter = Router();

userRouter.post(
  "",
  validDataMiddleware(userSchemasReq),
  userExistsMiddleware,
  createUserController
);

userRouter.get(
  "",
  validTokenMiddleware,
  adminAuthMiddleware,
  listUsersController
);

userRouter.get(
  "/:id",
  validTokenMiddleware,
  userNotExistsMiddleware,
  userIsActiveMiddleware,
  verifyUserOrAdminMiddleware,
  userIdController
);

userRouter.patch(
  "/:id",
  validTokenMiddleware,
  userDataUpdateMiddleware,
  validDataMiddleware(updateUserSchemasReq),
  userNotExistsMiddleware,
  updateUserIsActiveOrAdminMiddleware,
  verifyUserOrAdminMiddleware,
  updateUserController
);

userRouter.delete(
  "/:id",
  validTokenMiddleware,
  userNotExistsMiddleware,
  verifyUserOrAdminMiddleware,
  userIsActiveMiddleware,
  deleteUserController
);

export default userRouter;
