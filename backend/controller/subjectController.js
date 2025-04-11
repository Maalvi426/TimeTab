import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await prisma.subject.findMany();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subjects" });
  }
};

export const createSubject = async (req, res) => {
  const { name, code } = req.body;
  try {
    const subject = await prisma.subject.create({
      data: { name, code },
    });
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ error: "Error creating subject" });
  }
};
