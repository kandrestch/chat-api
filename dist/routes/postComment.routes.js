"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postComment_controller_1 = require("../controllers/postComment.controller");
const router = express_1.default.Router();
router.post('/', postComment_controller_1.PostCommentController.create);
router.get('/', postComment_controller_1.PostCommentController.getAll);
router.get('/:id', postComment_controller_1.PostCommentController.getOne);
router.put('/', postComment_controller_1.PostCommentController.update);
router.delete('/:id', postComment_controller_1.PostCommentController.delete);
exports.default = router;
