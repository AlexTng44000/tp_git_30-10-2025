import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import requestTypesRouter from './routes/requestTypes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/request-types', requestTypesRouter);

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/support_api';

if (process.env.NODE_ENV !== 'test') {
  connectDB(mongoUri)
    .then(() => {
      app.listen(port, () => console.log(`API on :${port}`));
    })
    .catch((e) => {
      console.error('Mongo connection error', e);
      process.exit(1);
    });
}

export default app; // pour tests
