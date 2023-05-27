import { Request, Response } from "express";
import { updateUserService } from "../../services";

const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.params.id, req.body);
  return res.status(200).json(data);
};

export default updateUserController;
