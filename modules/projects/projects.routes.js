import express from 'express';
import isAuthenticated from '../../middlewares/authenticated.js';
import * as projectsController from './projects.controller.js'
import isAdmin from '../../middlewares/admin.js';

const router = express.Router();

router.get('/', projectsController.getAll);
router.post('/', isAuthenticated, isAdmin, projectsController.createProject);
router.get('/:projectId', projectsController.getProject);
router.patch('/:projectId', isAuthenticated, isAdmin, projectsController.updateProject);
router.delete('/:projectId', isAuthenticated, isAdmin, projectsController.deleteProject);

export default router;