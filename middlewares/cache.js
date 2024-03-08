import cache from '../services/redis.js';

const handler = async (req, res, next) => {
  const path = req.originalUrl;

  try {
    const fromCache = await cache.get(path);

    if (!fromCache) {
        return next();
    }
      
    res.json(JSON.parse(fromCache));
  } catch (err) {
    return res.status(500).json({ message: "An error occured", err: err.message });
  }
}

export default handler;
