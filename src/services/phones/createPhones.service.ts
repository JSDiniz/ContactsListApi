import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { Phones } from "../../entities/phones.entity";
import { IPhonesReq, IPhonesRes } from "../../interfaces";

const createPhonesService = async (
  body: IPhonesReq[],
  contactId: string | null | undefined
): Promise<IPhonesRes[]> => {
  const phonesRepository = AppDataSource.getRepository(Phones);

  const phonesPromises = body.map(async (elem) => {
    const phone = phonesRepository.create(elem);
    return await phonesRepository.save(phone);
  });

  const arryPhone = await Promise.all(phonesPromises);

  if (contactId !== "") {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const contact = await contactRepository.findOne({
      where: { id: contactId },
      relations: ["phones"],
    });

    contact.phones.push(arryPhone[0]);

    const newcontact = contactRepository.create({
      phones: arryPhone,
      ...contact,
    });

    await contactRepository.save(newcontact);
  }

  return arryPhone;
};

export default createPhonesService;
