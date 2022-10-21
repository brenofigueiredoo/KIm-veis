import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propertites.entity";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties.entity";
import { AppError } from "../../errors/AppError";

const listSchedulesPropertiesIdServices = async (id: string) => {
  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedules: true,
    },
  });

  if (!properties) {
    throw new AppError("Properties not found", 404);
  }

  const schedules = await schedulesRepository.find({
    where: {
      properties: properties,
    },
  });

  return properties;
};
export default listSchedulesPropertiesIdServices;
