import {Request, Response, NextFunction} from "express"
import AppDataSource from "../data-source"
import { AppError } from "../errors/AppError"
import { User } from "../entities/user.entities"

const userExistsMiddleware = async (req: Request, res: Response , next: NextFunction) => {
    const {email} = req.body
    const userRepo = AppDataSource.getRepository(User);
    const userExist = await userRepo.findOneBy({ email: email });
  
    if (userExist) {
      throw new AppError("User already exists!", 409);
    }

    return next()
}

export default userExistsMiddleware