// route/teacherSubjectRoutes.js
import express from 'express';
import {
  assignTeacherToSubject,
  getSubjectsOfTeacher,
} from '../controller/teacherSubjectController.js';

const router = express.Router();

router.post('/', assignTeacherToSubject);              // Assign teacher to subject
router.get('/:teacherId', getSubjectsOfTeacher);       // Get subjects of a teacher

export default router;
