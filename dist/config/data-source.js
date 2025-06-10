"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../models/user.entity");
const chat_entity_1 = require("../models/chat.entity");
const friendRequest_entity_1 = require("../models/friendRequest.entity");
const friendRequestStatus_entity_1 = require("../models/friendRequestStatus.entity");
const chatMessage_entity_1 = require("../models/chatMessage.entity");
const privateMessage_entity_1 = require("../models/privateMessage.entity");
const post_entity_1 = require("../models/post.entity");
const postComment_entity_1 = require("../models/postComment.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './data.db',
    entities: [
        user_entity_1.User,
        privateMessage_entity_1.PrivateMessage,
        chat_entity_1.Chat,
        chatMessage_entity_1.ChatMessage,
        friendRequest_entity_1.FriendRequest,
        friendRequestStatus_entity_1.FriendRequestStatus,
        post_entity_1.Post,
        postComment_entity_1.PostComment,
    ],
    synchronize: true,
    logging: false,
});
