"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.post('/', user_controller_1.UserController.create);
router.get('/', user_controller_1.UserController.getAll);
router.get('/:id', user_controller_1.UserController.getOne);
router.put('/', user_controller_1.UserController.update);
router.delete('/:id', user_controller_1.UserController.delete);
exports.default = router;
