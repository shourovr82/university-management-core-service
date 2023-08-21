import { Building } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Building): Promise<Building> => {
  //
  const result = await prisma.building.create({
    data,
  });
  return result;
};

export const BuildingService = {
  insertIntoDB,
};
