<<<<<<< Updated upstream
const express = require("express");
require("dotenv").config();
const cors = require("cors");
=======
import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import DashboardRoutes from "./routes/dashboard.routes/dashboard.routes.js";


dotenv.config();
>>>>>>> Stashed changes

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => res.send("API en marche"));

app.use('/api/admin', DashboardRoutes);

const PORT = process.env.PORT || 5000;
<<<<<<< Updated upstream
=======
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));
>>>>>>> Stashed changes
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
