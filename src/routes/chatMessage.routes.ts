import express from 'express';
import {ChatMessageController as controller} from '../controllers/chatMessage.controller';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

router.get('/chat/:id', controller.getByChatId);
router.get('/chat/name/:name', controller.getByChatName);

export default router;