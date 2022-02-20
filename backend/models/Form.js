import mongoose from "mongoose";
const Schema = mongoose.Schema;
const formdata = new Schema({
  ID: String,
  Combination: String,
  Product: String,
  Price: String,
  Valueformoney: String,
  Brand: String,
  AfterSales: String,
  Score: String,
  Amazonurl: String,
  Flipkarturl: String,
  Relianceurl: String,
  Image: String,
});
const Formdata = mongoose.model("formdata", formdata);
export default Formdata;
