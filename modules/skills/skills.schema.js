import mongoose from 'mongoose';

const SkillsSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('Skills', SkillsSchema);
