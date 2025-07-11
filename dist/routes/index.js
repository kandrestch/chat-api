"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_routes_1 = __importDefault(require("./chat.routes"));
const chatMessage_routes_1 = __importDefault(require("./chatMessage.routes"));
const friendRequest_routes_1 = __importDefault(require("./friendRequest.routes"));
const friendRequestStatus_routes_1 = __importDefault(require("./friendRequestStatus.routes"));
const post_routes_1 = __importDefault(require("./post.routes"));
const postComment_routes_1 = __importDefault(require("./postComment.routes"));
const privateMessage_routes_1 = __importDefault(require("./privateMessage.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const router = (0, express_1.Router)();
router.use('/chats', chat_routes_1.default);
router.use('/chat-messages', chatMessage_routes_1.default);
router.use('/friend-requests', friendRequest_routes_1.default);
router.use('/friend-request-statuses', friendRequestStatus_routes_1.default);
router.use('/posts', post_routes_1.default);
router.use('/post-comments', postComment_routes_1.default);
router.use('/private-messages', privateMessage_routes_1.default);
router.use('/users', user_routes_1.default);
router.use('/auth', auth_routes_1.default);
exports.default = router;
