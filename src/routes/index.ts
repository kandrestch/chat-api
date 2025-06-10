import {Router} from 'express';


import chatRoutes from './chat.routes';
import chatMessageRoutes from './chatMessage.routes';
import friendRequestRoutes from './friendRequest.routes';
import friendRequestStatusRoutes from './friendRequestStatus.routes';
import postRoutes from './post.routes';
import postCommentRoutes from './postComment.routes';
import privateMessageRoutes from './privateMessage.routes';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use('/chats', chatRoutes);
router.use('/chat-messages', chatMessageRoutes);
router.use('/friend-requests', friendRequestRoutes);
router.use('/friend-request-statuses', friendRequestStatusRoutes);
router.use('/posts', postRoutes);
router.use('/post-comments', postCommentRoutes);
router.use('/private-messages', privateMessageRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;