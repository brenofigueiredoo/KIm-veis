import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.services";
import { instanceToPlain } from "class-transformer";
import listUsersService from "../services/users/listUsers.services";
import updateUserService from "../services/users/updateUser.services";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const createUser = await createUserService(user);
  return res.json(instanceToPlain(createUser));
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
};

const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id: string = req.params.id;
  const updatedUser = await updateUserService(user, id);
  return res.status(200).json(updatedUser);
};

export { createUserController, listUsersController, updateUserController };
