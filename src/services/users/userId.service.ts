import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserContacts, IUserRes } from "../../interfaces";
import { userContactSchema } from "../../schemas";

const userIdService = async (id: string): Promise<IUserContacts> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
    relations: ["contacts", "contacts.emails", "contacts.phones"],
  });

  const userWithoutPassword = await userContactSchema.validate(user, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
export default userIdService;
