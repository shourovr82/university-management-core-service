import { z } from 'zod';

const create = z.object({
  body: z.object({
    academicDepartmentId: z.string({
      required_error: 'Academic Department id is required',
    }),
    semesterRegistrationId: z.string({
      required_error: 'Semester Registration id is required',
    }),
    courseIds: z.array(
      z.string({
        required_error: 'Course id is required',
      }),
      {
        required_error: 'Course Ids are required',
      }
    ),
  }),
});

export const OfferedCourseValidations = {
  create,
};
