import {Router} from "express"
import {createUserController, listUsersController } from "../../controllers";
import { adminAuthMiddleware, userExistsMiddleware, validDataMiddleware, validTokenMiddleware } from "../../middlewares";
import { userSchemasReq } from "../../schemas";

const userRouter = Router()

userRouter.post("", validDataMiddleware(userSchemasReq), createUserController);

userRouter.get("",validTokenMiddleware, adminAuthMiddleware, listUsersController);

export default userRouter