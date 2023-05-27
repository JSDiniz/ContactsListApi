import { Request, Response } from "express";
import { deleteUserService } from "../../services";

const deleteUserControllers = async (req: Request, res: Response) => {
  const [status, userData] = await deleteUserService(req.params.id);
  return res.status(Number(status)).json(userData);
};

export default deleteUserControllers;
