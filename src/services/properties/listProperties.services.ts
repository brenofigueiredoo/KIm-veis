import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propertites.entity";

const listPropertiesService = async (): Promise<Properties[]> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.find();

  return properties;
};
export default listPropertiesService;
