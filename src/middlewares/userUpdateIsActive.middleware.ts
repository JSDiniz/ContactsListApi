import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { User } from "../entities/user.entities";

const userUpdateIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = req.user.isAdmin;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: req.params.id });

  if (!user.isActive && !admin) {
    throw new AppError("User is not active", 401);
  }

  return next();
};

export default userUpdateIsActiveMiddleware;
