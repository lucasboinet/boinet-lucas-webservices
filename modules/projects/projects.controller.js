import * as projectsService from './projects.service.js'

export const getAll = async (req, res) => {
  try {
    const projects = await projectsService.getAllProjects();

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
