import mongoose from 'mongoose';
import { USER_ROLES } from './users.constants.js'

const UsersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  skills: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Skills' 
  }],
  role: {
    type: String,
    enum: USER_ROLES,
    default: USER_ROLES.user,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Users', UsersSchema);
