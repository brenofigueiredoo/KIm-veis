import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoriesService from "../services/categories/createCategories.services";
import listCategoriesService from "../services/categories/listCategories.services";
import listCategoriesIdPropertiesService from "../services/categories/listCategoriesIdProperties.services";

const createCategoriesController = async (req: Request, res: Response) => {
  const { name }: ICategoryRequest = req.body;
  const newCategory = await createCategoriesService(name);
  return res.status(201).json(newCategory);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const listCategories = await listCategoriesService();
  return res.json(listCategories);
};

const listCategoriesIdPropertiesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const listCategories = await listCategoriesIdPropertiesService(id);
  return res.json(listCategories);
};

export {
  createCategoriesController,
  listCategoriesController,
  listCategoriesIdPropertiesController,
};
