import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/AppError";

const contactNotExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const findContact = await contactRepository.findOneBy({ id: req.params.id });

  if (!findContact) {
    throw new AppError("Contact does not exist!", 401);
  }

  return next();
};

export default contactNotExistMiddleware;
