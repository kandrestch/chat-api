"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const friendRequest_controller_1 = require("../controllers/friendRequest.controller");
const router = express_1.default.Router();
router.post('/', friendRequest_controller_1.FriendRequestController.create);
router.get('/', friendRequest_controller_1.FriendRequestController.getAll);
router.get('/:id', friendRequest_controller_1.FriendRequestController.getOne);
router.put('/', friendRequest_controller_1.FriendRequestController.update);
router.delete('/:id', friendRequest_controller_1.FriendRequestController.delete);
exports.default = router;
