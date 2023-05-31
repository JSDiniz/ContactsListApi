import { Response, Request } from "express";
import { updateContactService } from "../../services";

const updateContactController = async (req: Request, res: Response) => {
  const data = await updateContactService(req.body, req.params.id);
  return res.status(200).json(data);
};

export default updateContactController;
