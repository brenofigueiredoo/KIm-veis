import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listCategoriesService = async (): Promise<Categories[]> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const category = await categoriesRepository.find();

  return category;
};
export default listCategoriesService;
