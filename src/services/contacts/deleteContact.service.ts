import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";

const deleteContactService = async (contactId: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  await contactRepository
    .createQueryBuilder("contacts")
    .delete()
    .where("contacts.id = :id", { id: contactId })
    .execute();

  return [204, {}];
};

export default deleteContactService;
