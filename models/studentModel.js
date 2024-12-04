import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    IDCard: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    email: { type: String },
    phone: { type: String, required: true, unique: true },
    classID: { type:mongoose.Types.ObjectId, ref: 'User'},
  },
  {
    timestamps: true,
  }
);

// Create a model from the schema
const Student = mongoose.model("Student", studentSchema);

export default Student;
