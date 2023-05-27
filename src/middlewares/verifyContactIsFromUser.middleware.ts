import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";
import { Contacts } from "../entities/contacts.entity";

const verifyYouOwnerTheContactOrAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = req.user.isAdmin;
  const paramsId = req.params.id;

  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOne({
    where: { id: paramsId },
    relations: ["users"],
  });

  if (contact.users.id === req.user.id || admin) {
    return next();
  }

  throw new AppError("You need admin permission", 403);
};

export default verifyYouOwnerTheContactOrAdminMiddleware;
