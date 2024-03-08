import express from 'express';
import cors from 'cors';
import connectDB from './services/db.js';
import router from './routes/index.js';
import { connectRedis } from './services/redis.js';

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true
}));

connectDB();
connectRedis();

app.use('/', router);

app.listen(port, () => {
  console.log(`[server]: Running at http://localhost:${port}`);
});
