// controller/branchController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// POST: Create a new branch
export const createBranch = async (req, res) => {
  try {
    const { name, semester } = req.body;

    if (!name || !semester) {
      return res.status(400).json({ message: 'Name and semester are required' });
    }

    const newBranch = await prisma.branch.create({
      data: { name, semester: Number(semester) },
    });

    res.status(201).json(newBranch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Fetch all branches
export const getBranches = async (req, res) => {
  try {
    const branches = await prisma.branch.findMany();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
