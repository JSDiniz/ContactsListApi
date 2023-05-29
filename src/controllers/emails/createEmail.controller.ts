import { Request, Response } from "express";
import { createEmailsService } from "../../services";

const createEmailController = async (req: Request, res: Response) => {
  const data = await createEmailsService(req.body, req.params.id);
  return res.status(200).json(data[0]);
};

export default createEmailController;
