import { Router } from "express";
import { sessionController } from "../../controllers";
import { validDataMiddleware } from "../../middlewares";
import { sessionSchemaReq } from "../../schemas";

const sessionRouter = Router();

sessionRouter.post(
  "",
  validDataMiddleware(sessionSchemaReq),
  sessionController
);

export default sessionRouter;
