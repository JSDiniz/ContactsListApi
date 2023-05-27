import { Request, Response } from "express";
import { createContactService } from "../../services";

const createContactController = async (req: Request, res: Response) => {
  const data = await createContactService(req.body, req.user.id);
  return res.status(201).json(data);
};

export default createContactController;
