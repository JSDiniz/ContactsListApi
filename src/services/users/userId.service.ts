import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserRes } from "../../interfaces";
import { userSchemasRes } from "../../schemas";

const userIdService = async (id: string): Promise<IUserRes> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  const userWithoutPassword = await userSchemasRes.validate(user, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
export default userIdService;
