import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/AppError";

const phoneExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contact = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.phones", "phones")
    .where("contacts.id = :id", { id: req.params.id })
    .getOne();

  const phone = contact.phones.find((elem) => elem.phone === req.body[0].phone);

  if (phone) {
    throw new AppError("Phone already exists", 401);
  }

  return next();
};

export default phoneExistMiddleware;
