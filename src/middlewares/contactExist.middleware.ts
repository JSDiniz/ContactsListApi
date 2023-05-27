import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { AppError } from "../errors/AppError";

const contactExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contact = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.users", "users")
    .where("contacts.users = :id", { id: req.user.id })
    .andWhere("contacts.name = :name", { name: req.body["name"] })
    .getOne();

  if (contact) {
    throw new AppError("Contact already exists", 401);
  }

  return next();
};

export default contactExistMiddleware;
