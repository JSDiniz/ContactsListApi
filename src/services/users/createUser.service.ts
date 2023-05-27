import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors/AppError"
import { IUserReq, IUserRes } from "../../interfaces"
import { userSchemasRes } from "../../schemas"


const createUserService  = async (body: IUserReq): Promise<IUserRes> => {

    const usergetRepository = AppDataSource.getRepository(User)
    const userExist = await usergetRepository.findOneBy({ email: body.email });
  
    if (userExist) {
      throw new AppError("User already exists!", 409);
    }

    const user =  usergetRepository.create(body)

    await usergetRepository.save(user)

    const validUser = await userSchemasRes.validate(user, {
        stripUnknown: true,
      });

    return validUser

}

export default createUserService