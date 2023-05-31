import { Request, Response } from "express";
import { listContactsService } from "../../services";

const listContactsController = async (req: Request, res: Response) => {
  const data = await listContactsService();
  return res.status(200).json(data);
};

export default listContactsController;
