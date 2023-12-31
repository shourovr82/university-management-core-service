import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { semesterRegistrationFilterableFields } from './semesterRegistration.constants';
import SemesterRegistrationService from './semesterRegistration.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  //
  const result = await SemesterRegistrationService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration Created',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, semesterRegistrationFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await SemesterRegistrationService.getAllFromDB(
    filters,
    options
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registrations fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SemesterRegistrationService.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration fetched successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SemesterRegistrationService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration deleted successfully',
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SemesterRegistrationService.updateOneInDb(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration updated successfully',
    data: result,
  });
});

//
const startMyRegistration = catchAsync(async (req: Request, res: Response) => {
  //
  const user = (req as any).user;
  const result = await SemesterRegistrationService.startMyRegistration(
    user.userId
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Semester Registration Started successfully',
    data: result,
  });
});

//
const enrollIntoCourse = catchAsync(async (req: Request, res: Response) => {
  //
  const user = (req as any).user;

  const result = await SemesterRegistrationService.enrollIntoCourse(
    user.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Semester Registration Course Enrolled successfully',
    data: result,
  });
});
const withDrawFromCourse = catchAsync(async (req: Request, res: Response) => {
  //
  const user = (req as any).user;

  const result = await SemesterRegistrationService.withDrawFromCourse(
    user.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      'Student Semester Registration Course withdraw From Course successfully',
    data: result,
  });
});
const confirmMyRegistration = catchAsync(
  async (req: Request, res: Response) => {
    //
    const user = (req as any).user;

    const result = await SemesterRegistrationService.withDrawFromCourse(
      user.userId,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Confirmed your registration successfully',
      data: result,
    });
  }
);
const getMyRegistration = catchAsync(async (req: Request, res: Response) => {
  //
  const user = (req as any).user;

  const result = await SemesterRegistrationService.getMyRegistration(
    user.userId
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Registration Data is fetched Successfully',
    data: result,
  });
});
const startNewSemester = catchAsync(async (req: Request, res: Response) => {
  //
  const { id } = req.params;
  const result = await SemesterRegistrationService.startNewSemester(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Started Successfully',
    data: result,
  });
});
export const SemesterRegistrationController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
  startMyRegistration,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmMyRegistration,
  getMyRegistration,
  startNewSemester,
};
