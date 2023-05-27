import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContactsRes } from "../../interfaces";
import { contactsIdSchema } from "../../schemas";

const listContactsIdService = async (
  contactId: string
): Promise<IContactsRes[]> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contacts = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.phones", "phones")
    .innerJoinAndSelect("contacts.emails", "emails")
    .where("contacts.usersId = :usersId", { usersId: contactId })
    .getMany();

  const validContacts = await contactsIdSchema.validate(contacts, {
    stripUnknown: true,
  });

  return validContacts;
};

export default listContactsIdService;
