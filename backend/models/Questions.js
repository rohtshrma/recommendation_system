import mongoose from "mongoose";
const Schema = mongoose.Schema;
const questiondata=new Schema({
	Question:String,
    Answer:Array,
    Product:String,
    Title:String
})
const Questiondata=mongoose.model('questiondata',questiondata);
export default Questiondata;
