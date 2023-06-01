import { Request, Response } from "express";
import { listContactsUserService } from "../../services";

const listContactsUserController = async (req: Request, res: Response) => {
  const data = await listContactsUserService(req.params.id);
  return res.status(200).json(data);
};

export default listContactsUserController;
