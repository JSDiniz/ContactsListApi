import {Router} from "express"
import {createUserController, listUsersController } from "../../controllers";
import { userExistsMiddleware, validDataMiddleware } from "../../middlewares";
import { userSchemasReq } from "../../schemas";

const userRouter = Router()

userRouter.post("", validDataMiddleware(userSchemasReq), createUserController);

userRouter.get("", listUsersController);

export default userRouter