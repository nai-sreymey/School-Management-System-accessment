import express from 'express';
const routerstu = express.Router();
import student from '../controllers/studentController.js';
const { createStudent, getAllStudents,getAllStudentById , updateStudent,deleteStudent} = student;

// Define the routes
routerstu.post('/create', createStudent);
routerstu.get('/all', getAllStudents);
routerstu.get('/:id',getAllStudentById );
routerstu.put('/:id',updateStudent);
routerstu.delete('/:id',deleteStudent);

export default routerstu;
