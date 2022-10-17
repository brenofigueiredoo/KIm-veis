import { hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interfaces/users";

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
    throw new AppError("Name, email, password, isAdm is missing");
  }

  const emailAlreadyExists = await userRepository.findOneBy({
    email: email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists");
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

  return user;
};
export default createUserService;
