import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Routes
import DashboardRoutes from './routes/dashboard.routes/dashboard.routes.js';
import DonationRoutes from './routes/donation.routes/donation.routes.js';
import uploadRouter from './routes/upload.js';

dotenv.config();

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());


// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/', uploadRouter);
app.use('/api/admin', DashboardRoutes);
app.use('/', DonationRoutes);

// MongoDB connection and server start
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
