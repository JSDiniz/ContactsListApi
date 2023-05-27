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
  const existsUser = await userRepository.findOneBy({ id: req.params.id });

  if (!existsUser) {
    throw new AppError("Invalid User", 404);
  }

  return next();
};

export default userExistsMiddleware;
