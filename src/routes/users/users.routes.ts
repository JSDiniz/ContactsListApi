import {Router} from "express"
import createUserController from "../../controllers";
import { userExistsMiddleware, validDataMiddleware } from "../../middlewares";
import { userSchemasReq } from "../../schemas";

const userRouter = Router()

userRouter.post("", validDataMiddleware(userSchemasReq), createUserController);

export default userRouter