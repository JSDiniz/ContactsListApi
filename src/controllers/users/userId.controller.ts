import { Request, Response } from "express";
import { userIdService } from "../../services";

const userIdController = async (req: Request, res: Response) => {
  const listUsers = await userIdService(req.params.id);
  return res.status(201).json(listUsers);
};

export default userIdController;
