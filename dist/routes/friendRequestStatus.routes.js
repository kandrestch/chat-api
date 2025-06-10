"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const friendRequestStatus_controller_1 = require("../controllers/friendRequestStatus.controller");
const router = express_1.default.Router();
router.post('/', friendRequestStatus_controller_1.FriendRequestStatusController.create);
router.get('/', friendRequestStatus_controller_1.FriendRequestStatusController.getAll);
router.get('/:id', friendRequestStatus_controller_1.FriendRequestStatusController.getOne);
router.put('/', friendRequestStatus_controller_1.FriendRequestStatusController.update);
router.delete('/:id', friendRequestStatus_controller_1.FriendRequestStatusController.delete);
exports.default = router;
