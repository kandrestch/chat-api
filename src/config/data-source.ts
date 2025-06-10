import { DataSource } from 'typeorm';
import { User } from '../models/user.entity';
import { Chat } from '../models/chat.entity';
import { FriendRequest } from '../models/friendRequest.entity';
import { FriendRequestStatus } from '../models/friendRequestStatus.entity';
import { ChatMessage } from '../models/chatMessage.entity';
import { PrivateMessage } from '../models/privateMessage.entity';
import { Post } from '../models/post.entity';
import { PostComment } from '../models/postComment.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './data.db',
  entities: [
    User,
    PrivateMessage,
    Chat,
    ChatMessage,
    FriendRequest,
    FriendRequestStatus,
    Post,
    PostComment,
  ],
  synchronize: true,
  logging: false,
});