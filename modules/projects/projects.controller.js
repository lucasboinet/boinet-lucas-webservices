import * as projectsService from './projects.service.js'
import cache from '../../services/redis.js';
import config from '../../config/index.js';

export const getAll = async (req, res) => {
  const { order, limit, direction, search } = req.query;

  try {
    const projects = await projectsService.getAllProjects({ order, limit, search, direction });

    cache.setEx(req.originalUrl, config.redisTtl, JSON.stringify(projects));

    res.json(projects);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await projectsService.getProjectById(projectId);

    if (!project) {
      res.sendStatus(404);
      return;
    }

    cache.setEx(req.originalUrl, config.redisTtl, JSON.stringify(project));

    res.json(project);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createProject = async (req, res) => {
  const { name, description, members = [] } = req.body;

  try {
    const createdProject = await projectsService.createProject({
        name, 
        description, 
        members
    });

    res.json(createdProject);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateProject = async (req, res) => {
  const { projectId } = req.params;
  const { name, description, members } = req.body;

  try {
    const project = await projectsService.getProjectById(projectId);

    if (!project) {
      res.status(400).send("Project do not exist");
      return;
    }

    const updatedProject = await projectsService.updateProjectById({
      projectId,
      payload: {
        name, 
        description, 
        members
      },
    });

    res.json(updatedProject);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await projectsService.getProjectById(projectId);

    if (!project) {
      res.status(400).send("Project do not exist");
      return;
    }

    await projectsService.deleteProjectById(projectId);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
