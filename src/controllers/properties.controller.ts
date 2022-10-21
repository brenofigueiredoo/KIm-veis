import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertiesService from "../services/properties/createProperties.services";
import listPropertiesService from "../services/properties/listProperties.services";

const createPropertiesController = async (req: Request, res: Response) => {
  const data: IPropertyRequest = req.body;
  const newProperties = await createPropertiesService(data);
  return res.status(201).json(newProperties);
};

const listPropertiesController = async (req: Request, res: Response) => {
  const listProperties = await listPropertiesService();
  return res.json(listProperties);
};

export { createPropertiesController, listPropertiesController };
