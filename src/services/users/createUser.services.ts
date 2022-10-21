import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { hashSync } from "bcryptjs";
import { AppError } from "../../errors/AppError";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
  isActive,
  createdAt,
  updatedAt,
}: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  if (!name || !email || !password) {
    throw new AppError("name or email or password or isAdm is missing", 400);
  }

  const emailAlreadyExists = await userRepository.findOneBy({
    email: email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword = hashSync(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    isAdm,
    isActive,
    createdAt,
    updatedAt,
  });

  await userRepository.save(user);

  const returbUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return returbUser;
};

export default createUserService;
