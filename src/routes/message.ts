import { Router } from "express";
import MessageController from "../controllers/message.controller";

const messageRouter = Router();

const messageController = new MessageController()

messageRouter.get("/", messageController.get)
messageRouter.post("/:message", messageController.post)

export default messageRouter
