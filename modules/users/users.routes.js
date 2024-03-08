import express from 'express';
import * as usersController from './users.controller.js';
import isAuthenticated from '../../middlewares/authenticated.js';
import isAdmin from '../../middlewares/admin.js';
import handleCache from '../../middlewares/cache.js';

const router = express.Router();

router.get('/me', isAuthenticated, handleCache, usersController.getCurrentUser);
router.get('/', isAuthenticated, handleCache, usersController.getAll);
router.post('/', usersController.createUser);
router.post('/login', usersController.loginUser);
router.get('/:userId', isAuthenticated, handleCache, usersController.getUser);
router.patch('/:userId', isAuthenticated, isAdmin, usersController.updateUser);
router.delete('/:userId', isAuthenticated, isAdmin, usersController.deleteUser);

export default router;