import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import sequelizeConnection from "../models/db.connect";

export const config = async (app: express.Application) => {
  app.use(cors());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app

    .get("/", (req, res) => {
      return res.sendFile(path.join(__dirname, "../../public/index.html"));
    });
  sequelizeConnection.sync().then(() => {
    console.log("Connected to BiteSpeed DB");
  });

};
