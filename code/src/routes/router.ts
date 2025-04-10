import express from 'express';
import { Routes } from '../models/routes';
import { defaultRoute } from './defaultRoute';

const router = express.Router();

router.get(Routes.HOME, defaultRoute);

export default router;
