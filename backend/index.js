import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import csv from "csvtojson";


const csvFilePath="Book1.csv";



const app = express();
app.use(cors());
app.use(express.json());
const CONNECTION_URL =
  "mongodb+srv://faiz:1234@cluster0.brqsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});



const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId
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


const data=await csv().fromFile(csvFilePath);



for(var i=0;i<data.length;i++)
{
  const formdata1=new Formdata(data[i]);

formdata1.save((error)=>{
	if(error)
		{
			console.log(error);
		}
	else{
		console.log("Successful");
	}
})

}



app.get('/savedata', (req, res) => {

  Formdata.find({  })
      .then((data) => {
          console.log('Data: ', data);
          res.json(data);
      })
      .catch((error) => {
          console.log('error happened',error);
      });
});

app.get("/",(req,res)=>{
  res.json("hello");
})

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server Running!!")))
  .catch((err) => console.log(err));
