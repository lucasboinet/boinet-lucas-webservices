import express from 'express';
import * as skillsController from './skills.controller.js';
import isAuthenticated from '../../middlewares/authenticated.js';
import isAdmin from '../../middlewares/admin.js';

const router = express.Router();

router.get('/', isAuthenticated, skillsController.getAll);
router.post('/', isAuthenticated, isAdmin, skillsController.createSkill);
router.get('/:skillId', isAuthenticated, skillsController.getSkill);
router.patch('/:skillId', isAuthenticated, isAdmin, skillsController.updateSkill);
router.delete('/:skillId', isAuthenticated, isAdmin, skillsController.deleteSkill);

export default router;