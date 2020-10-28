import ValueSchema from "../models/Value";
import JobSchema from "../models/Job"
import CarSchema from "../models/Car"
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Jobs = mongoose.model("Job", JobSchema)
  Cars = mongoose.model("Car", CarSchema)
}

export const dbContext = new DbContext();
