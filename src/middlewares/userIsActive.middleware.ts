import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { User } from "../entities/user.entities";

const userIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: req.params.id });

  if (!user.isActive) {
    throw new AppError("User is not active", 400);
  }

  return next();
};

export default userIsActiveMiddleware;
