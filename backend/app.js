
import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import DashboardRoutes from "./routes/dashboard.routes/dashboard.routes.js";


dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => res.send("API en marche"));

app.use('/api/admin', DashboardRoutes);

const PORT = process.env.PORT || 5000;

const mongoURI = process.env.MONGO_URI;
// console.log(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
  })
  .catch(err => console.log('Error connecting to MongoDB:', err));
