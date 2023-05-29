import AppDataSource from "../../data-source";
import { Emails } from "../../entities/emails.entity";

const deleteEmailService = async (emailId: string) => {
  const emailRepository = AppDataSource.getRepository(Emails);

  await emailRepository
    .createQueryBuilder("emails")
    .delete()
    .where("emails.id = :id", { id: emailId })
    .execute();

  return [204, {}];
};

export default deleteEmailService;
