import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import subjectRoutes from './route/subjectRoutes.js';
import teacherRoutes from './route/teacherRoutes.js'; // When ready to add
import branchRoutes from './route/branchRoutes.js';
import branchSubjectRoutes from './route/branchSubjectRoutes.js';
import teacherSubjectRoutes from './route/teacherSubjectRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// API Routes
app.use('/api/subjects', subjectRoutes);
app.use('/api/teachers', teacherRoutes); // You can comment this until teacherRoutes is created
app.use('/api/branches', branchRoutes);
app.use('/api/branch-subjects', branchSubjectRoutes);
app.use('/api/teacher-subjects', teacherSubjectRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is up and running...');
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgGreen.black);
});
