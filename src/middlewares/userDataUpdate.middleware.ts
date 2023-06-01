import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const userDataUpdateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = Object.keys(req.body);
  const isAdmin = req.user.isAdmin;

  if (isAdmin && !data.includes("id")) {
    return next();
  } else if (
    data.includes("id") ||
    data.includes("isAdmin") ||
    data.includes("isActive")
  ) {
    throw new AppError(
      "The id, isAdm and isActive fields cannot be updated",
      401
    );
  }
  return next();
};

export default userDataUpdateMiddleware;
