import express from 'express';
import {UserController as controller} from '../controllers/user.controller';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/username/:username', controller.getByUsername);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

export default router;