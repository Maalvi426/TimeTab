import prisma from '../config/db.js';

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teachers' });
  }
};

export const createTeacher = async (req, res) => {
  const { name, email } = req.body;
  try {
    const teacher = await prisma.teacher.create({
      data: { name, email },
    });
    res.status(201).json(teacher);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create teacher' });
  }
};
