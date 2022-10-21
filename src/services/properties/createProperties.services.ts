import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/propertites.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesService = async (data: IPropertyRequest) => {
  const { size, value, address, categoryId } = data;

  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const addressAlreadyExist = await addressRepository.findOneBy({
    zipCode: address.zipCode,
    number: address.number,
  });

  const findCategory = await categoriesRepository.findOneBy({
    id: categoryId,
  });

  if (addressAlreadyExist) {
    throw new AppError(
      "Two properties cannot be registered with the same address",
      400
    );
  }

  if (address.state.length > 2) {
    throw new AppError(
      "Properties with the state field greater than 2 digits cannot be registered",
      400
    );
  }

  if (address.zipCode.length > 8) {
    throw new AppError(
      "Properties with zipCode field longer than 8 digits cannot be registered",
      400
    );
  }

  if (!findCategory) {
    throw new AppError("Invalid categoryId", 404);
  }

  const createAddress = addressRepository.create({
    city: address.city,
    district: address.district,
    number: address.number,
    state: address.state,
    zipCode: address.zipCode,
  });

  await addressRepository.save(createAddress);

  const createPropertie = propertiesRepository.create({
    size,
    value,
    address: createAddress,
    category: { ...findCategory, properties: [] },
  });

  const newPropertie = await propertiesRepository.save(createPropertie);

  return newPropertie;
};
export default createPropertiesService;
