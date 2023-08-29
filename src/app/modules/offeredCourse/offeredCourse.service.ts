import { OfferedCourse } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { asyncForEach } from '../../../shared/utils';
import { ICreateOfferedCourse } from './offeredCourse.interface';

const insertIntoDB = async (
  data: ICreateOfferedCourse
): Promise<OfferedCourse[]> => {
  //

  const { academicDepartmentId, semesterRegistrationId, courseIds } = data;

  const result: any[] = [];

  await asyncForEach(courseIds, async (courseId: string) => {
    const insertOfferedCourse = await prisma.offeredCourse.create({
      data: {
        academicDepartmentId,
        semesterRegistrationId,
        courseId,
      },
    });
    result.push(insertOfferedCourse);
  });
  return result;
};

export const OfferedCourseService = {
  insertIntoDB,
};
