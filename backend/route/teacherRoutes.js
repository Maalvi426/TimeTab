import express from 'express';
const router = express.Router();

import { getAllTeachers, createTeacher } from '../controller/teacherController.js';

router.get('/', getAllTeachers);
router.post('/', createTeacher);

export default router;
