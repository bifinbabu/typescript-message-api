import Message from "../models/message.model"
import BaseController from "./base.controller"

export default class MessageController extends BaseController {
    constructor() {
        super(Message)
    }
}