import "dotenv/config";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import { ISessionReq, ISessionRes } from "../../interfaces";
import { userSchemasRes } from "../../schemas";


const sessionService = async (body: ISessionReq): Promise<ISessionRes> => {

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({where: { email: body.email }});

  if (!findUser) {
    throw new AppError("Email or password invalid", 403);
  }

  const passwordMatch = await compare(body.password, findUser.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403);
  }

  if (!findUser.isActive) {
    throw new AppError("User is not active", 400);
  }

  const token = jwt.sign(
    {
      isAdmin: findUser.isAdmin,
      isActive: findUser.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: findUser.id,
      expiresIn: "24h",
    }
  );

  const user = await userSchemasRes.validate(findUser, {
    stripUnknown: true,
  });

  return { token, user };
};
export default sessionService;
