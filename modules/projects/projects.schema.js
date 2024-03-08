import mongoose from 'mongoose';

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }]
}, { timestamps: true });

export default mongoose.model('Projects', ProjectsSchema);
