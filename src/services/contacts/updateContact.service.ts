import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import updatePhonesServices from "../phones/updatePhones.services";
import updateEmailsServices from "../emails/updateEmails.services";
import { contactSchemaRes } from "../../schemas";

const updateContactService = async (body: any, contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contact = await contactRepository
    .createQueryBuilder("contacts")
    .leftJoinAndSelect("contacts.phones", "phones")
    .leftJoinAndSelect("contacts.emails", "emails")
    .where("contacts.id = :id", { id: contactId })
    .getOne();

  const arryPhone = await updatePhonesServices(body.phones);

  const arryEmils = await updateEmailsServices(body.emails);

  Reflect.deleteProperty(body, "phones");
  Reflect.deleteProperty(body, "emails");

  const newcontact = contactRepository.create({
    ...contact,
    phones: arryPhone,
    emails: arryEmils,
    ...body,
  });
  await contactRepository.save(newcontact);

  const validContact = await contactSchemaRes.validate(newcontact, {
    stripUnknown: true,
  });

  return validContact;
};

export default updateContactService;
