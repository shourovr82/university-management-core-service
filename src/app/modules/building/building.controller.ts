import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BuildingService } from './building.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building created successfully',
    data: result,
  });
});

export const BuildingController = {
  insertIntoDB,
};
