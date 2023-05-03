import { Request, Response } from "express";
import mongoose from "mongoose";
import { MessageInterface } from "../interfaces/message.interface";

export default class BaseController {
  model: mongoose.Model<any, any>;
  modelName: string;

  constructor(model: mongoose.Model<any, any>) {
    this.model = model;
    this.modelName = model.modelName;
  }

  post = async (req: Request, res: Response) => {
    try {
      const message: MessageInterface = { message: req.params.message };
      const savedMessage = await this.model.create(message);
      res.status(200).json(savedMessage);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const allMessages = await this.model.find();
      res.status(200).json(allMessages);
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  };
}
