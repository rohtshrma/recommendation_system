const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
var app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{

    res.json("hello");
})
 

app.listen(port, function () {
  console.log("Welcome you to recommendation system");
});