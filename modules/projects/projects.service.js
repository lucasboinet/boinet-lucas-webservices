import { SORT_DIRECTION } from './projects.constant.js';
import ProjectsSchema from './projects.schema.js'

export function getAllProjects({ order, limit, search, direction }) {
  const sortDirection = SORT_DIRECTION[direction] || 1;

  const searchQuery = search 
    ? { $or: [
      { name: new RegExp(`${search}`, 'i') },
      { description: new RegExp(`${search}`, 'i') },
    ] } 
    : {}

  return ProjectsSchema
    .find({ ...searchQuery })
    .sort({ [order]: sortDirection })
    .limit(limit);
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

