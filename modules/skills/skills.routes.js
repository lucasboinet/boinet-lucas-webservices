import express from 'express';
import * as skillsController from './skills.controller.js';
import isAuthenticated from '../../middlewares/authenticated.js';
import isAdmin from '../../middlewares/admin.js';
import handleCache from '../../middlewares/cache.js';

const router = express.Router();

router.get('/', isAuthenticated, handleCache, skillsController.getAll);
router.post('/', isAuthenticated, isAdmin, skillsController.createSkill);
router.get('/:skillId', isAuthenticated, handleCache, skillsController.getSkill);
router.patch('/:skillId', isAuthenticated, isAdmin, skillsController.updateSkill);
router.delete('/:skillId', isAuthenticated, isAdmin, skillsController.deleteSkill);

export default router;