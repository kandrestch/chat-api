"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const privateMessage_controller_1 = require("../controllers/privateMessage.controller");
const router = express_1.default.Router();
router.post('/', privateMessage_controller_1.PrivateMessageController.create);
router.get('/', privateMessage_controller_1.PrivateMessageController.getAll);
router.get('/:id', privateMessage_controller_1.PrivateMessageController.getOne);
router.put('/', privateMessage_controller_1.PrivateMessageController.update);
router.delete('/:id', privateMessage_controller_1.PrivateMessageController.delete);
exports.default = router;
