import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";

const deleteContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.users", "users")
    .innerJoinAndSelect("contacts.phones", "phones")
    .innerJoinAndSelect("contacts.emails", "emails")
    .delete()
    .where("contacts.id = :id", { id: contactId })
    .execute();

  return [204, {}];
};

export default deleteContactService;
