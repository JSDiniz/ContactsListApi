import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserUpdate } from "../../interfaces";
import { userSchemasRes } from "../../schemas";

const updateUserService = async (id: string, userData: IUserUpdate) => {
  const userRepositor = AppDataSource.getRepository(User);

  const user = await userRepositor.findOneBy({ id: id });

  const updateUser = userRepositor.create({
    ...user,
    ...userData,
  });

  await userRepositor.save(updateUser);

  const userWithoutPassord = await userSchemasRes.validate(updateUser, {
    stripUnknown: true,
  });

  return userWithoutPassord;
};

export default updateUserService;
