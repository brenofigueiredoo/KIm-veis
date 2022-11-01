import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propertites.entity";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesServices = async (
  data: IScheduleRequest,
  userId: string
) => {
  const { date, hour, propertyId } = data;

  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );
  const userRepository = AppDataSource.getRepository(User);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const newHour = Number(hour.split(":")[0]);

  const getDay = new Date(data.date).getDay();
  if (getDay === 0 || getDay === 6) {
    throw new AppError("Schedule on weekdays");
  }

  if (+newHour < 8 || +newHour >= 18) {
    throw new AppError("Invalid hour", 400);
  }

  const hourDisponivel = await propertiesRepository
    .createQueryBuilder("properties")
    .leftJoinAndSelect("properties.schedules", "schedules_user_properties")
    .where("properties.id = :id", { id: propertyId })
    .andWhere("schedules_user_properties.date = :date", { date: date })
    .andWhere("schedules_user_properties.hour = :hour", { hour: hour })
    .getOne();

  if (hourDisponivel) {
    throw new AppError("Horário não disponível", 400);
  }

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const properties = await propertiesRepository.findOneBy({
    id: propertyId,
  });

  if (!properties) {
    throw new AppError("Property not found", 404);
  }

  const createSchedules = schedulesRepository.create({
    date,
    hour,
    properties: properties,
    user: user!,
  });

  await schedulesRepository.save(createSchedules);

  return { message: "Schedule created successfully" };
};
export default createSchedulesServices;
