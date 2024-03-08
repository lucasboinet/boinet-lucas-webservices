import express from 'express';
import isAuthenticated from '../../middlewares/authenticated.js';
import * as projectsController from './projects.controller.js'
import isAdmin from '../../middlewares/admin.js';
import handleCache from '../../middlewares/cache.js';

const router = express.Router();

router.get('/', handleCache, projectsController.getAll);
router.post('/', isAuthenticated, isAdmin, projectsController.createProject);
router.get('/:projectId', handleCache, projectsController.getProject);
router.patch('/:projectId', isAuthenticated, isAdmin, projectsController.updateProject);
router.delete('/:projectId', isAuthenticated, isAdmin, projectsController.deleteProject);

export default router;