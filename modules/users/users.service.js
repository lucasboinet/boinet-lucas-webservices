import { SORT_DIRECTION } from './users.constants.js';
import { getSkillsFilters } from './users.functions.js';
import UsersSchema from './users.schema.js'

export async function getAllUsers({ direction, search, order, limit, fields }) {
  const sortDirection = SORT_DIRECTION[direction] || 1;

  const skillsFilters = getSkillsFilters(fields.skills);

  const searchQuery = search 
    ? { $or: [
      { email: new RegExp(`${search}`, 'i') },
      { firstname: new RegExp(`${search}`, 'i') },
      { lastname: new RegExp(`${search}`, 'i') },
    ] } 
    : {}

  return UsersSchema
    .find({ ...skillsFilters, ...searchQuery })
    .sort({ [order]: sortDirection })
    .limit(limit)
    .select('-password')
    .populate('skills');
}

export function getUserById(userId) {
  return UsersSchema.findOne({ _id: userId }).populate('skills');
}

export function getOneByEmail(email) {
  return UsersSchema.findOne({ email });
}

export function updateUserById({ userId, payload }) {
  return UsersSchema.findOneAndUpdate(
    { _id: userId },
    { $set: { ...payload } },
    { new: true }
  ).select('-password').populate('skills');
}

export function deleteUserById(userId) {
  return UsersSchema.deleteOne({ _id: userId })
}

export async function createUser({ firstname, lastname, email, password, skills }) {
  const createdUser = await UsersSchema.create({ firstname, lastname, email, password, skills });
  return getUserById(createdUser._id).select('-password');
}

