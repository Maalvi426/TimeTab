// controller/branchSubjectController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// POST: Assign subject to branch with frequency
export const assignSubjectToBranch = async (req, res) => {
  try {
    const { branchId, subjectId, frequency } = req.body;

    if (!branchId || !subjectId || frequency == null) {
      return res.status(400).json({ message: 'branchId, subjectId and frequency are required' });
    }

    const assignment = await prisma.branchSubject.create({
      data: {
        branchId: Number(branchId),
        subjectId: Number(subjectId),
        frequency: Number(frequency),
      },
    });

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Get subjects assigned to a branch
export const getSubjectsOfBranch = async (req, res) => {
  try {
    const { branchId } = req.params;

    const subjects = await prisma.branchSubject.findMany({
      where: { branchId: Number(branchId) },
      include: {
        subject: true,
      },
    });

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
