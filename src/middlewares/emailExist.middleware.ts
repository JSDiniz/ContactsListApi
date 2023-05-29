import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/AppError";

const emailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contact = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.emails", "emails")
    .where("contacts.id = :id", { id: req.params.id })
    .getOne();

  const email = contact.emails.find(
    (email) => email.email === req.body[0].email
  );

  if (email) {
    throw new AppError("Email already exists", 401);
  }

  return next();
};

export default emailExistMiddleware;
