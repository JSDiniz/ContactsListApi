import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const verifyUserOrAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const paramsId = req.params.id;
  const admin = req.user.isAdmin;

  if (userId === paramsId || admin) {
    return next();
  }

  throw new AppError("You need admin permission", 403);
};

export default verifyUserOrAdminMiddleware;
