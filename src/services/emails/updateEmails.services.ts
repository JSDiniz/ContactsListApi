import AppDataSource from "../../data-source";
import { Emails } from "../../entities/emails.entity";

const updateEmailsServices = async (body: any[]) => {
  const emailRepository = AppDataSource.getRepository(Emails);

  const emailsPromises = body.map(async (elem) => {
    const email = await emailRepository.findOneBy({ id: elem.id });
    const newEmail = emailRepository.create({
      ...email,
      ...elem,
    });
    return await emailRepository.save(newEmail);
  });

  const arryEmils = await Promise.all(emailsPromises);

  return arryEmils;
};

export default updateEmailsServices;
