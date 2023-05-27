import AppDataSource from "../../data-source";
import { Emails } from "../../entities/emails.entity";
import { IEmailsReq, IEmailsRes } from "../../interfaces";

const createEmailsService = async (
  body: IEmailsReq[]
): Promise<IEmailsRes[]> => {
  const emailRepository = AppDataSource.getRepository(Emails);

  const emailsPromises = body.map(async (elem) => {
    const email = emailRepository.create(elem);
    return await emailRepository.save(email);
  });

  const arryEmils = await Promise.all(emailsPromises);

  return arryEmils;
};

export default createEmailsService;
