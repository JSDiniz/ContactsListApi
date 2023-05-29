import { Request, Response } from "express";
import { deleteEmailService } from "../../services";

const deleteEmailController = async (req: Request, res: Response) => {
  const [status, data] = await deleteEmailService(req.params.id);
  return res.status(Number(status)).json(data);
};

export default deleteEmailController;
