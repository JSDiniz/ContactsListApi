import { Request, Response } from "express";
import { createPhonesService } from "../../services";

const createPhoneController = async (req: Request, res: Response) => {
  const data = await createPhonesService(req.body, req.params.id);
  return res.status(200).json(data[0]);
};

export default createPhoneController;
