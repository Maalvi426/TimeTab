// route/branchSubjectRoutes.js
import express from 'express';
import {
  assignSubjectToBranch,
  getSubjectsOfBranch,
} from '../controller/branchSubjectController.js';

const router = express.Router();

router.post('/', assignSubjectToBranch);                // Assign subject to branch
router.get('/:branchId', getSubjectsOfBranch);          // Get subjects of a branch

export default router;
