"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatMessage_controller_1 = require("../controllers/chatMessage.controller");
const router = express_1.default.Router();
router.post('/', chatMessage_controller_1.ChatMessageController.create);
router.get('/', chatMessage_controller_1.ChatMessageController.getAll);
router.get('/:id', chatMessage_controller_1.ChatMessageController.getOne);
router.put('/', chatMessage_controller_1.ChatMessageController.update);
router.delete('/:id', chatMessage_controller_1.ChatMessageController.delete);
exports.default = router;
