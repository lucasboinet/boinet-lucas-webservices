import skillsSchema from "../skills/skills.schema.js";

export async function getSkillsFilters(skills) {
    const skillsIds = skills.map((value) => new RegExp(`${value}`, 'i'));
    const skillsQuery = await skillsSchema.find({ label: { $in: skillsIds } });
    return { skills: { $in: skillsQuery.map((skill) => skill._id) } };
}