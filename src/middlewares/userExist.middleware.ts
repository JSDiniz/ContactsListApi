import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { User } from "../entities/user.entities";

const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const existsUser = await userRepository.findOneBy({ email: req.body.email });

  if (existsUser) {
    throw new AppError("User already exists", 409);
  }

  return next();
};

export default userExistsMiddleware;
