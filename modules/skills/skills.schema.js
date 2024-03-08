import mongoose from 'mongoose';

const SkillsSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Skills', SkillsSchema);
