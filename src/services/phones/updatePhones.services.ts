import AppDataSource from "../../data-source";
import { Phones } from "../../entities/phones.entity";

const updatePhonesServices = async (body: any[]) => {
  const phonesRepository = AppDataSource.getRepository(Phones);

  const phonesPromises = body.map(async (elem) => {
    const phone = await phonesRepository.findOneBy({ id: elem.id });
    const newPhone = phonesRepository.create({
      ...phone,
      ...elem,
    });
    return await phonesRepository.save(newPhone);
  });

  const arrytelephone = await Promise.all(phonesPromises);

  return arrytelephone;
};

export default updatePhonesServices;
