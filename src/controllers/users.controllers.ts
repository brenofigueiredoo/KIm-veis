import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.services";
import deleteUserService from "../services/users/deleteUser.services";
import listUsersService from "../services/users/listUsers.services";
import upadateUserService from "../services/users/updateUser.services";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
};

const upadateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newUser: IUserUpdate = req.body;
  const updatedUser = await upadateUserService(newUser, id);
  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const deletedUser = await deleteUserService(id);
  return res.status(204).json(deletedUser);
};

export {
  createUserController,
  listUsersController,
  upadateUserController,
  deleteUserController,
};
