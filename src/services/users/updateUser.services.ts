import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users";

const upadateUserService = async (newUser: IUserUpdate, id: string) => {
  const { name, email, password } = newUser;

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  const verifyData = Object.keys(newUser);

  if (
    verifyData.includes("id") ||
    verifyData.includes("isActive") ||
    verifyData.includes("isAdm")
  ) {
    throw new AppError("It is not possible to change this value", 401);
  }

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user;
};

export default upadateUserService;
