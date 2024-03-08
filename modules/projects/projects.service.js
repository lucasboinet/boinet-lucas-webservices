import ProjectsSchema from './projects.schema.js'

export function getAllProjects() {
  return ProjectsSchema.find();
}

export function getProjectById(projectId) {
  return ProjectsSchema.findOne({ _id: projectId });
}

export function updateProjectById({ projectId, payload }) {
  return ProjectsSchema.findOneAndUpdate(
    { _id: projectId },
    { $set: { ...payload } },
    { new: true }
  );
}

export function deleteProjectById(projectId) {
  return ProjectsSchema.deleteOne({ _id: projectId })
}

export function createProject({ name, description, members }) {
  return ProjectsSchema.create({ name, description, members });
}

