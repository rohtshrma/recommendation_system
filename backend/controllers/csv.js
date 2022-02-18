import CsvJson from "../models/csvJson.js";
import csv from "csvtojson";

export const getData = async (req, res) => {
  try {
    const CsvJson = await CsvJson.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createData = async (req, res) => {
  //   const post = req.body;
  const filePath = "D:/Freelance/recommendation_system/backend/Book1.csv";
  const jsonArray = await csv().fromFile(filePath);
  console.log(jsonArray);

  //   const newPost = new PostMessage(post);

  //   try {
  //     await newPost.save();
  //     res.status(201).json(newPost);
  //   } catch (error) {
  //     res.status(409).json({ message: error.message });
  //   }
};
