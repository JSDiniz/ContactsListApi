import { Request, Response } from "express";
import { sessionService } from "../../services";


const sessionController = async (req: Request, res: Response) => {
  const token = await sessionService(req.body);
  return res.status(200).json(token);
};

export default sessionController;