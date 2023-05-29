import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { Emails } from "../entities/emails.entity";

const emailNotExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const emailRepository = AppDataSource.getRepository(Emails);

  const email = await emailRepository.findOneBy({ id: req.params.id });

  if (!email) {
    throw new AppError("Email does not exist!", 409);
  }

  return next();
};

export default emailNotExistMiddleware;
