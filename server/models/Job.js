import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
    {
        jobTitle: { type: String , required: true }, 
        salary: {type: Number, required: true}, 
        company: { type: String , required: true}, 
        description: { type: String, required: true}
    }, 
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Job;