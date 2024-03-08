import express from 'express';
import users from '../modules/users/users.routes.js';
import skills from '../modules/skills/skills.routes.js';
import projects from '../modules/projects/projects.routes.js';

const router = express.Router();

router.use('/users', users);
router.use('/skills', skills);
router.use('/projects', projects);

export default router;
