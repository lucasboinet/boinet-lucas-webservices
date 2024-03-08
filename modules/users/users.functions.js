import skillsSchema from "../skills/skills.schema.js";

export async function getSkillsFilters(skills) {
    const skillsQuery = await skillsSchema.find({ label: { $in: skills.map((value) => new RegExp(`${value}`, 'i')) } });
    return { skills: { $in: skillsQuery.map((skill) => skill._id) } };
}