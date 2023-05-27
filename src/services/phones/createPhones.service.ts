import AppDataSource from "../../data-source";
import { Phones } from "../../entities/phones.entity";
import { IPhonesReq, IPhonesRes } from "../../interfaces";

const createPhonesService = async (
  body: IPhonesReq[]
): Promise<IPhonesRes[]> => {
  const phonesRepository = AppDataSource.getRepository(Phones);

  const phonesPromises = body.map(async (elem) => {
    const phone = phonesRepository.create(elem);
    return await phonesRepository.save(phone);
  });

  const arryPhone = await Promise.all(phonesPromises);

  return arryPhone;
};

export default createPhonesService;
