import express from 'express';
import {PrivateMessageController as controller} from '../controllers/privateMessage.controller';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

router.get('/users/:id1/:id2', controller.getByUserIds);
router.get('/users/usernames/:username1/:username2', controller.getByUsernames);

export default router;