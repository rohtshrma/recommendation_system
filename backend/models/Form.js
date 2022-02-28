import mongoose from "mongoose";
const Schema = mongoose.Schema;
const formdata = new Schema({
  ID: String,
  Combination: String,
  Product: String,
  ProductName:String,
  Price: String,
  Valueformoney: Number,
  Brand: String,
  AfterSales: String,
  Score: Number,
  Amazonurl: String,
  Flipkarturl: String,
  Relianceurl: String,
  Image: String,
});
const Formdata = mongoose.model("formdata", formdata);
export default Formdata;
