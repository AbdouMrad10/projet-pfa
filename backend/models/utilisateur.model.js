import mongoose from 'mongoose';


const donorSchema = new mongoose.Schema({
  NomComplet: String,
  Email: String,
  Telephone: String,
  IDCIN: Number,
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' }, // Lien avec la campagne
  donationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donor', donorSchema);
