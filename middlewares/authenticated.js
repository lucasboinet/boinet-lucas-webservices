import config from '../config/index.js';
import jwt from 'jsonwebtoken';
import { getUserById } from '../modules/users/users.service.js';

const handler = (req, res, next) => {
  const bearer = req.headers.authorization;

  try {
    if (!bearer) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const token = bearer.split(' ')[1];

    if (!token) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    jwt.verify(token, config.jwtSecret, async (err, result) => {
      if (err) {
        return res.status(403).json({ message: err.message })
      }
      const user = await getUserById(result.userId).select('-password');
      req.user = user;
      return next();
    });
  } catch (err) {
    return res.status(500).json({ message: "An error occured", err: err.message });
  }
}

export default handler;
