import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import csv from "csvtojson";
import Formdata from "./models/Form.js";
import Questiondata from "./models/Questions.js";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { promisify } from "util";
import creds from "./client_secret.js"


const csvFilePath = "Combinations.csv";
const questionFilePath = "Questions.csv";

const app = express();
app.use(cors());
app.use(express.json());
const CONNECTION_URL =
  "mongodb+srv://faiz:1234@cluster0.brqsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const data = await csv().fromFile(csvFilePath);
const questiondata = await csv().fromFile(questionFilePath);




const doc=new GoogleSpreadsheet('1m3zWmEqMXc2A9EiRCXC9N627tqsSuNSI7Dpe0-EofGQ');
async function accessSpreadsheet(){
  
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

 
  await doc.loadInfo(); // loads document properties and worksheets
  

  
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  const rows=await sheet.getRows();
 console.log(rows[0].ID);


  /*
 rows.forEach((row)=>{
  printdata(row);
 })
 */
}



//accessSpreadsheet();


Formdata.deleteMany({  }).then(function(){
  console.log("Form Data deleted"); 
}).catch(function(error){
  console.log(error); 
});
//Uncomment these code to save data in db
for (var i = 0; i < data.length; i++) {
  const formdata1 = new Formdata(data[i]);

  formdata1.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Product data Successfully saved");
    }
  });
}
// // // Uncomment these code to save question into db



Questiondata.deleteMany( {}).then(function(){
  console.log("Question Data deleted"); // Success
}).catch(function(error){
  console.log(error); // Failure
});
for (var i = 0; i < questiondata.length; i++) {
  const questiondata1 = new Questiondata(questiondata[i]);

  questiondata1.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Question Successfully saved");
    }
  });
}

app.get("/getquestions/:product", (req, res) => {
  Questiondata.find({ Product: req.params.product })
    .then((data) => {
      if (data.length == 0) {
        console.log("hit");
        res.json("No data found");
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      console.log("error happened", error);
    });
});

app.get("/answer/:combination/:product", (req, res) => {
  Formdata.find({
    Combination:req.params.combination,
    Product: req.params.product,
  })
    .then((data) => {
      if (data.length == 0) {
        console.log("hit");
        res.json("No data found");
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      console.log("error happened", error);
    });
});

app.get("/savedata", (req, res) => {
  Formdata.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error happened", error);
    });
});

app.get("/", (req, res) => {
  res.json("hello");
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server Running!!")))
  .catch((err) => console.log(err));
