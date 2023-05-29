import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import { Phones } from "../entities/phones.entity";

const phoneNotExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const phoneRepository = AppDataSource.getRepository(Phones);

  const Phone = await phoneRepository.findOneBy({ id: req.params.id });

  if (!Phone) {
    throw new AppError("Phone does not exist!", 409);
  }

  return next();
};

export default phoneNotExistMiddleware;
