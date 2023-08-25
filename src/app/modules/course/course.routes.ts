import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CourseController } from './course.controller';
const router = express.Router();

router.get('/', CourseController.getAllFromDB);
router.get('/:id', CourseController.getByIdFromDB);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  CourseController.insertIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteByIdFromDB
);
export const CourseRoutes = router;
