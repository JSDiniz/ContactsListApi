import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entity";

const verifyContactIsFromUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOne({
    where: { id: req.params.id },
    relations: ["users"],
  });

  if (contact.users.id === req.user.id) {
    return next();
  }

  throw new AppError("You need admin permission", 403);
};

export default verifyContactIsFromUserMiddleware;
