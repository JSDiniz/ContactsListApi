import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { Emails } from "../../entities/emails.entity";
import { IEmailsReq, IEmailsRes } from "../../interfaces";

const createEmailsService = async (
  body: IEmailsReq[],
  contactId: string | null | undefined
): Promise<IEmailsRes[]> => {
  const emailRepository = AppDataSource.getRepository(Emails);

  const emailsPromises = body.map(async (elem) => {
    const email = emailRepository.create(elem);
    return await emailRepository.save(email);
  });

  const arryEmils = await Promise.all(emailsPromises);

  if (contactId !== "") {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const contact = await contactRepository.findOne({
      where: { id: contactId },
      relations: ["emails"],
    });

    contact.emails.push(arryEmils[0]);

    const newcontact = contactRepository.create({
      emails: arryEmils,
      ...contact,
    });

    await contactRepository.save(newcontact);
  }

  return arryEmils;
};

export default createEmailsService;
