import ValueSchema from "../models/Value";
import JobSchema from "../models/Job"
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Jobs = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();
