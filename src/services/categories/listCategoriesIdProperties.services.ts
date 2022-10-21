import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/propertites.entity";
import { AppError } from "../../errors/AppError";

const listCategoriesIdPropertiesService = async (id: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const category = await categoriesRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
export default listCategoriesIdPropertiesService;
