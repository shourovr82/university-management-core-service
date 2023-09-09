import express from 'express';
import { StudentEnrolledCourseMarksController } from './studentEnrolledCourseMarks.controller';

const router = express.Router();

router.patch(
  '/update-marks',
  StudentEnrolledCourseMarksController.updateStudentMarks
);

export const StudentEnrolledCourseMarksRoutes = router;
