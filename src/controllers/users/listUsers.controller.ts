import {Request, Response} from "express"
import { listUsersService } from "../../services";

const listUsersController = async (req: Request, res:Response) => {
    const listUsers = await listUsersService();
    return res.status(201).json(listUsers);
}

export default listUsersController