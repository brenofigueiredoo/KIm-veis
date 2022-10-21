import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import createSchedulesServices from "../services/schedules/createSchedules.services";
import listSchedulesPropertiesIdServices from "../services/schedules/listSchedulesPropertiesId.services";

const createSchedulesController = async (req: Request, res: Response) => {
  const data: IScheduleRequest = req.body;
  const userId = req.user.id;

  const schedules = await createSchedulesServices(data, userId);
  return res.status(201).json(schedules);
};

const listSchedulesPropertiesIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const listSchedules = await listSchedulesPropertiesIdServices(id);
  return res.json(listSchedules);
};

export { createSchedulesController, listSchedulesPropertiesIdController };
