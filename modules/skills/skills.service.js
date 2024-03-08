import SkillsSchema from './skills.schema.js'

export function getAllSkills() {
  return SkillsSchema.find();
}

export function getOneByLabel(label) {
  return SkillsSchema.findOne({ label: new RegExp(`^${label}$`, 'i') });
}

export function getSkillById(skillId) {
  return SkillsSchema.findOne({ _id: skillId });
}

export function updateSkillById({ skillId, payload }) {
  return SkillsSchema.findOneAndUpdate(
    { _id: skillId },
    { $set: { ...payload } },
    { new: true }
  );
}

export function deleteSkillById(skillId) {
  return SkillsSchema.deleteOne({ _id: skillId })
}

export function createSkill({ label }) {
  return SkillsSchema.create({ label });
}

