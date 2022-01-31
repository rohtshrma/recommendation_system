import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import csv from "csvtojson";
import Formdata from "./models/Form.js";
import Questiondata from "./models/Questions.js";

const csvFilePath = "Book1.csv";
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

console.log(questiondata);
//  Uncomment these code to save data in db
// for (var i = 0; i < data.length; i++) {
//   const formdata1 = new Formdata(data[i]);

//   formdata1.save((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Product data Successfully saved");
//     }
//   });
// }
// Uncomment these code to save question into db

// for (var i = 0; i < questiondata.length; i++) {
//   const questiondata1 = new Questiondata(questiondata[i]);

//   questiondata1.save((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Question Successfully saved");
//     }
//   });
// }

app.get("/getquestions/:product", (req, res) => {
  Questiondata.find({ Product: req.params.product })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error happened", error);
    });
});

app.get("/answer/:ans1/:ans2/:ans3/:product", (req, res) => {
  Formdata.find({
    Question1: req.params.ans1,
    Question2: req.params.ans2,
    Question3: req.params.ans3,
    Product: req.params.product,
  })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
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
