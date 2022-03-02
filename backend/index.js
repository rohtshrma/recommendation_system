import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import csv from "csvtojson";
import Formdata from "./models/Form.js";
import Questiondata from "./models/Questions.js";
import { GoogleSpreadsheet } from "google-spreadsheet";
import 'dotenv/config';


const csvFilePath = "Combinations.csv";
const questionFilePath = "Questions.csv";

const app = express();
app.use(cors());
app.use(express.json());
const CONNECTION_URL =
 process.env.MONGODB;
const PORT = process.env.PORT || 8000;
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const data = await csv().fromFile(csvFilePath);
const questiondata = await csv().fromFile(questionFilePath);

const updateProduct = (req, res) => {
  const productdata = [];
  const doc = new GoogleSpreadsheet(
    "1m3zWmEqMXc2A9EiRCXC9N627tqsSuNSI7Dpe0-EofGQ"
  );
  async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email:process.env.CLIENT_EMAIL1,
      private_key:process.env.PRIVATE_KEY1 ,
    });

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    const rows = await sheet.getRows();

    for (let i = 0; i < rows.length; i++) {
      var obj = {};

      for (let j = 0; j < rows[0]._sheet.headerValues.length; j++) {

        if(rows[0]._sheet.headerValues[j] == "Product")
        {
          obj[rows[0]._sheet.headerValues[j]] = rows[i]._rawData[j].toUpperCase()
        }
       
      }
      productdata.push(obj);
    }
  }
  accessSpreadsheet();

  Formdata.deleteMany({})
    .then(function () {
      console.log("Form Data deleted");
    })
    .catch(function (error) {
      console.log(error);
    });
  //Uncomment these code to save data in db
  setTimeout(function () {
    for (var i = 0; i < productdata.length; i++) {
      const formdata1 = new Formdata(productdata[i]);

      formdata1.save((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Product data Successfully saved");
        }
      });
    }
  }, 5000);
  res.json({
    message: "Data Updated",
  });
};
const updateQuestions = (req, res) => {
  const questiondata = [];
  const doc = new GoogleSpreadsheet(
    "1OkIUAcqkytMCtlW5rnJHGbiOlYk4QeN9jWxTurzAXzw"
  );
  async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email:process.env.CLIENT_EMAIL2,
      private_key:process.env.PRIVATE_KEY2 ,
    });

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    const rows = await sheet.getRows();

    for (let i = 0; i < rows.length; i++) {
      var obj = {};

      for (let j = 0; j < rows[0]._sheet.headerValues.length; j++) {
        if(rows[0]._sheet.headerValues[j] == "Product")
        {
          obj[rows[0]._sheet.headerValues[j]] = rows[i]._rawData[j].toUpperCase()
        }
       
      }
      questiondata.push(obj);
    }
  }
  accessSpreadsheet();

  
  //Uncomment these code to save data in db
  Questiondata.deleteMany({})
  .then(function () {
    console.log("Question Data deleted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });

  setTimeout(function () {
    for (var i = 0; i < questiondata.length; i++) {
      const questiondata1 = new Questiondata(questiondata[i]);
      questiondata1.save((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Question data Successfully saved");
        }
      });
    }
  }, 5000);
  res.json({
    message: "Question Data Updated",
  });
};


app.get("/getquestions/:product", (req, res) => {
  Questiondata.find({
    Product:req.params.product.toUpperCase(),
  })
    .then((data) => {
      if (data.length == 0) {
        res.json({
          message:"No data found",
          data:[]
        });
       
      } else {
        res.json({
          message:"data found",
          data:data
        });
      }
    })
    .catch((error) => {
      console.log("error happened", error);
    });
});

app.get("/answer/:combination/:product", (req, res) => {
  var coll = Formdata.find({
    Combination: req.params.combination,
    Product:
      req.params.product.toUpperCase(),
  });
  coll.count().then((count) => {
    if (count == 0) {
      Formdata.find({
        Combination: "99999",
        Product:
          req.params.product.toUpperCase() 
      })
        .sort({ ValueforMoney: 1 })

        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.log("error happened", error);
        });
    } else {
      console.log("Hello");
      Formdata.find({
        Combination: req.params.combination,
        Product:
          req.params.product.toUpperCase() 
      })
        .sort({ Score: -1 })
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.log("error happened", error);
        });
    }
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
app.get("/update", updateProduct);
app.get("/updatequestions",updateQuestions);

app.get("/", (req, res) => {
  res.json("hello");
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Server Running!!")))
  .catch((err) => console.log(err));
