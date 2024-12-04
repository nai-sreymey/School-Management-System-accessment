import studentModel from "../models/studentModel.js";

// Create a new student
const createStudent = async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    if (students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }
    res.json({ students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllStudentById = async (req, res) => {
    try {
      const student = await studentModel.findById(req.params.id);
  
      if (student) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      res.status(200).json(Student);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Interbal server error", details: err.message });
    }
  };
  
  
  const updateStudent = async (req, res) => {
    try {
      const updateData = req.body;
      const updatestudent = await studentModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
  
      if (!updatestudent) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      res
        .status(200)
        .json({
          message: "Student updated successfully",
          data: updatestudent,
        });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Internal server error", details: err.message });
    }
  };
  
  const deleteStudent = async (req ,res) => {
      try{
          const deletestudent = await studentModel.findByIdAndDelete(req.params.id);
          if (!deletestudent){
              return res.status(404).json({error:'Student not found'});
          }
          res.status(200).json({message: 'Student dateled sucessfully'});
      } catch (err){
          res.status(500).json({error:'Internal server error',details:err.message});
      }
  };
  export default {createStudent,getAllStudents,getAllStudentById,updateStudent,deleteStudent};
  