import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { Contacts } from "../../entities/contacts.entity";
import createEmailsService from "../emails/createEmails.service";
import createPhonesService from "../phones/createPhones.service";
import { IContactsReq, IContactsRes } from "../../interfaces";
import { contactSchemaRes } from "../../schemas";

const createContactService = async (
  body: IContactsReq,
  userId: string
): Promise<IContactsRes> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contacts);

  const user = await userRepository.findOneBy({ id: userId });

  const arryPhones = await createPhonesService(body.phones, "");

  const arryEmils = await createEmailsService(body.emails, "");

  Reflect.deleteProperty(body, "phones");
  Reflect.deleteProperty(body, "emails");

  const contact = contactRepository.create({
    ...body,
    users: user,
    phones: arryPhones,
    emails: arryEmils,
  });

  await contactRepository.save(contact);

  const validContact = await contactSchemaRes.validate(contact, {
    stripUnknown: true,
  });

  return validContact;
};

export default createContactService;
