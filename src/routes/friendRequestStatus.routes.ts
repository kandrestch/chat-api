import express from 'express';
import {FriendRequestStatusController as controller} from '../controllers/friendRequestStatus.controller';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

export default router;