import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { allUsersSchema } from "../../schemas";
import { IUserRes } from "../../interfaces";

const listUsersService = async (): Promise<IUserRes[]> => {
    const usersRepository = AppDataSource.getRepository(User);

    const listUsers = await usersRepository.find();
  
    const validListUsers = await allUsersSchema.validate(listUsers, {
      stripUnknown: true,
    });
  
    return validListUsers;

}

export default listUsersService