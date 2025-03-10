const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  Titre: String,
  Etat:String,
  Description: String,
  QuantiteCible: String,
  QuantiteCollecte: { type: Number, default: 0 },
  DateDebut: Date,
  DateFin: Date
});

module.exports = mongoose.model('Campaign', campaignSchema);
