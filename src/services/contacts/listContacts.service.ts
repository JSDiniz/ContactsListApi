import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContactsuserRes } from "../../interfaces";
import { allsContactsSchema } from "../../schemas";

const listContactsService = async (): Promise<IContactsuserRes[]> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);

  const contacts = await contactsRepository.find({
    relations: ["users", "phones", "emails"],
  });

  const validContacts = await allsContactsSchema.validate(contacts, {
    stripUnknown: true,
  });

  return validContacts;
};

export default listContactsService;
