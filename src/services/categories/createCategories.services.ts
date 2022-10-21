import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

const createCategoriesService = async (name: string) => {
  if (!name) {
    throw new AppError("Name is missing", 400);
  }

  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOneBy({
    name: name,
  });

  if (category) {
    throw new AppError("Category already exists", 400);
  }

  const newCategory = await categoryRepository.save({
    name,
  });

  return newCategory;
};
export default createCategoriesService;
