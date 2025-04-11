import express from "express";
import { getAllSubjects, createSubject } from "../controller/subjectController.js";

const router = express.Router();

router.get("/getsub", getAllSubjects);
router.post("/create", createSubject);

export default router;
