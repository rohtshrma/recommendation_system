import mongoose from "mongoose";
const Schema = mongoose.Schema;
const formdata=new Schema({
	ID:String,
	Question1:String,
	Question2:String,
  Question3:String,
 Product:String,
  Price:String,
  Valueformoney:String,
  Brand:String,
  AfterSales:String,
  Score:String,
  Amazon:String,
  Flipkart:String,
  Reliance:String
})
const Formdata=mongoose.model('formdata',formdata);
export default Formdata;
