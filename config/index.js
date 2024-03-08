import dotenv from 'dotenv';
dotenv.config();

export default {
	mongoUri: process.env.MONGO_URI,
	jwtSecret: process.env.JWT_SECRET,
	redisPort: process.env.REDIS_PORT,
	redisTtl: process.env.REDIS_TTL,
	bcryptSalt: 10,
};
