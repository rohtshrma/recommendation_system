import mongoose from "mongoose";
const Schema = mongoose.Schema;
const questiondata=new Schema({
	Question:String,
    Image:String,
    Answer:Array,
    Product:String,
    Title:String,
    Text:String,
    Video:String
})
const Questiondata=mongoose.model('questiondata',questiondata);
export default Questiondata;
