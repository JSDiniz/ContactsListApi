import { Request, Response } from "express";
import { deletePhoneService } from "../../services";

const deletePhoneController = async (req: Request, res: Response) => {
  const [status, data] = await deletePhoneService(req.params.id);
  return res.status(Number(status)).json(data);
};

export default deletePhoneController;
