import express from 'express';
import { BuildingController } from './building.controller';
const router = express.Router();

router.post('/', BuildingController.insertIntoDB);

export const BuildingRoutes = router;
