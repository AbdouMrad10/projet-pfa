const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => res.send("API en marche"));

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
