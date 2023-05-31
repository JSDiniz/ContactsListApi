import { Request, Response } from "express";
import { contactIdService } from "../../services";

const contactIdController = async (req: Request, res: Response) => {
  const data = await contactIdService(req.params.id);
  return res.status(200).json(data);
};

export default contactIdController;
