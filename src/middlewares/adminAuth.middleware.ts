import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const adminAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdmin) {
    throw new AppError("You need admin permission!", 403);
  }

  return next();
};

export default adminAuthMiddleware;
