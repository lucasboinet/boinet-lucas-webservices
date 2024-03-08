import mongoose from 'mongoose';
import config from '../config/index.js';

export default function connectDB() {
	mongoose.connect(config.mongoUri);

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error: '));
	db.once('open', function () {
		console.log('[mongodb]: Connected successfully');
	});
}
