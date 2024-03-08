import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";
import * as usersService from "./users.service.js";

export const getAll = async (req, res) => {
  try {
    const users = await usersService.getAllUsers().select('-password');

    res.json(users);
  } catch (err) {
    res.send(err);
  }
};

export const getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await usersService.getUserById(userId).select('-password');

    if (!user) {
      res.sendStatus(404);
      return;
    }

    res.json(user);
  } catch (err) {
    res.send(err);
  }
};

export const createUser = async (req, res) => {
  const { firstname, lastname, password, email, skills = [] } = req.body;

  try {
    const user = await usersService.getOneByEmail(email);

    if (user) {
      res.status(400).send("User already exist");
      return;
    }

    if (!password) {
      res.status(400).send("You need to provide a password");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, config.bcryptSalt);

    const createdUser = await usersService.createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      skills,
    });

    res.json(createdUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstname, lastname, email, skills } = req.body;

  try {
    const user = await usersService.getUserById(userId);

    if (!user) {
      res.status(400).send("User do not exist");
      return;
    }

    const updatedUser = await usersService.updateUserById({
      userId,
      payload: {
        firstname,
        lastname,
        email,
        skills,
      },
    });

    res.json(updatedUser);
  } catch (err) {
    res.send(err);
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await usersService.getUserById(userId);

    if (!user) {
      res.status(400).send("User do not exist");
      return;
    }

    await usersService.deleteUserById(userId);

    res.sendStatus(204);
  } catch (err) {
    res.send(err);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersService.getOneByEmail(email);

    if (!user) {
      res.status(400).send("User do not exist");
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(400).send("Email or password is invalid, please try again");
      return;
    }

    const accessToken = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "1h",
    });

    res.status(200).send({ access_token: accessToken });
  } catch (err) {
    res.send(err);
  }
};

export const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.json(user);
};
