import express from 'express';
import config from '../../config/index.js';
import * as skillsService from './skills.service.js'
import isAuthenticated from '../../middlewares/authenticated.js';

const router = express.Router();

const getAll = async (req, res) => {
  try {
    const skills = await skillsService.getAllSkills();

    res.json(skills);
  } catch(err) {
    res.status(500).send(err);
  }
}

const getSkill = async (req, res) => {
  const { skillId } = req.params;

  try {
    const skill = await skillsService.getSkillById(skillId);

    if (!skill) {
      res.sendStatus(404)
      return
    }

    res.json(skill);
  } catch(err) {
    res.status(500).send(err);
  }
}

const createSkill = async (req, res) => {
  const { label } = req.body;

  try {
    const skill = await skillsService.getOneByLabel(label);

    if (skill) {
      res.status(400).send('Skill already exist');
      return
    }

    const createdSkill = await skillsService.createSkill({ 
      label
    });

    res.json(createdSkill);    
  } catch(err) {
    res.status(500).send(err);
  }
}

const updateSkill = async (req, res) => {
  const { skillId } = req.params;
  const { label } = req.body;

  try {
    const skill = await skillsService.getSkillById(skillId);

    if (!skill) {
      res.status(400).send('Skill do not exist');
      return
    }

    const updatedSkill = await skillsService.updateSkillById({
      skillId,
      payload: {
        label
      }
    });

    res.json(updatedSkill)
  } catch(err) {
    res.status(500).send(err);
  }
}

const deleteSkill = async (req, res) => {
  const { skillId } = req.params;

  try {
    const skill = await skillsService.getSkillById(skillId);

    if (!skill) {
      res.status(400).send('Skill do not exist');
      return
    }

    await skillsService.deleteSkillById(skillId);

    res.sendStatus(204)
  } catch(err) {
    res.status(500).send(err);
  }
}

router.get('/', getAll);
router.post('/', createSkill);
router.get('/:skillId', getSkill);
router.patch('/:skillId', isAuthenticated, updateSkill);
router.delete('/:skillId', isAuthenticated, deleteSkill);

export default router;