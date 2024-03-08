import express from 'express';
import * as skillsController from './skills.controller.js';
import isAuthenticated from '../../middlewares/authenticated.js';

const router = express.Router();

router.get('/', skillsController.getAll);
router.post('/', skillsController.createSkill);
router.get('/:skillId', skillsController.getSkill);
router.patch('/:skillId', isAuthenticated, skillsController.updateSkill);
router.delete('/:skillId', isAuthenticated, skillsController.deleteSkill);

export default router;