import express from 'express';
import {FriendRequestController as controller} from '../controllers/friendRequest.controller';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

export default router;