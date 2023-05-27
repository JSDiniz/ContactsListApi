import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  await userRepository.save({ ...user, isActive: false });

  return [204, {}];
};

export default deleteUserService;
