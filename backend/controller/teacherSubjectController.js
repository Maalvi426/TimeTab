// controller/teacherSubjectController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Assign a teacher to a subject
export const assignTeacherToSubject = async (req, res) => {
  try {
    const { teacherId, subjectId } = req.body;

    if (!teacherId || !subjectId) {
      return res.status(400).json({ message: 'teacherId and subjectId are required' });
    }

    const assigned = await prisma.teacherSubject.create({
      data: {
        teacherId: Number(teacherId),
        subjectId: Number(subjectId),
      },
    });

    res.status(201).json(assigned);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all subjects taught by a teacher
export const getSubjectsOfTeacher = async (req, res) => {
  try {
    const { teacherId } = req.params;

    const subjects = await prisma.teacherSubject.findMany({
      where: { teacherId: Number(teacherId) },
      include: {
        subject: true,
      },
    });

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
