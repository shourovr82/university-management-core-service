import express from 'express';
import { OfferedCourseController } from '../offeredCourse/offeredCourse.controller';

const router = express.Router();

router.post('/', OfferedCourseController.insertIntoDB);

export const OfferedCourseSectionRoutes = router;
