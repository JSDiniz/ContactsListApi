import AppDataSource from "../../data-source";
import { Emails } from "../../entities/emails.entity";
import { IEmails } from "../../interfaces";

const updateEmailsServices = async (body: IEmails[]) => {
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
