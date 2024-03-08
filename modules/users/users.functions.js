import skillsSchema from "../skills/skills.schema.js";

export async function getSkillsFilters(skills) {
    const skillsRegex = skills.map((value) => new RegExp(`${value}`, 'i'));
    const skillsQuery = await skillsSchema.find({ label: { $in: skillsRegex } });
    return { skills: { $in: skillsQuery.map((skill) => skill._id) } };
}