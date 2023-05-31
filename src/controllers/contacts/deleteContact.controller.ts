import { Request, Response } from "express";
import { deleteContactService } from "../../services";

const deleteContactController = async (req: Request, res: Response) => {
  const [status, data] = await deleteContactService(req.params.id);
  return res.status(Number(status)).json(data);
};

export default deleteContactController;
