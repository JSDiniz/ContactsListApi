import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContactsRes } from "../../interfaces";

const contactIdService = async (contactId: string): Promise<IContactsRes> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: ["phones", "emails"],
  });

  return contact;
};

export default contactIdService;
