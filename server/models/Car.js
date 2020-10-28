import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        imgUrl: { type: Image , required: true, default: "http://placehold.it/200"},
        make: { type: String , required: true }, 
        model: {type: String, required: true}, 
        year: { type: Number , required: true}, 
        description: { type: String, required: true}
    }, 
    { timestamps: true, toJSON: { virtuals: true } }
)

export default Car;