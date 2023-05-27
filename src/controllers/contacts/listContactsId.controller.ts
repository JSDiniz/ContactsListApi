import { Request, Response } from "express";
import { listContactsIdService } from "../../services";

const listContactsIdController = async (req: Request, res: Response) => {
  const data = await listContactsIdService(req.params.id);
  return res.status(200).json(data);
};

export default listContactsIdController;
