// route/branchRoutes.js
import express from 'express';
import { createBranch, getBranches } from '../controller/branchController.js';

const router = express.Router();

router.post('/', createBranch);    // Create new branch
router.get('/', getBranches);      // Get all branches

export default router;
