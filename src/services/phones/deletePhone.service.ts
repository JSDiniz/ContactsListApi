import AppDataSource from "../../data-source";
import { Phones } from "../../entities/phones.entity";

const deletePhoneService = async (phonesId: string) => {
  const phoneRepository = AppDataSource.getRepository(Phones);

  await phoneRepository
    .createQueryBuilder("phones")
    .delete()
    .where("phones.id = :id", { id: phonesId })
    .execute();

  return [204, {}];
};

export default deletePhoneService;
