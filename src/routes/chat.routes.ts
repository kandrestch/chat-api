import express from 'express';
import {ChatController as controller} from '../controllers/chat.controller';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/name/:name', controller.getByName);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

router.get('/user/:id', controller.getByUserId);
router.get('/user/username/:username', controller.getByUsername);

export default router;