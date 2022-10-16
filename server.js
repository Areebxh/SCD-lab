import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({extended:true}))

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});