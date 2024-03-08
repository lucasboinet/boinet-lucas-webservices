import UsersSchema from './users.schema.js'

export function getAllUsers() {
  return UsersSchema.find().populate('skills');
}

export function getOneByEmail(email) {
  return UsersSchema.findOne({ email });
}

export function getUserById(userId) {
  return UsersSchema.findOne({ _id: userId }).populate('skills');
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

