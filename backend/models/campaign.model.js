import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  Titre: { 
    type: String, 
    required: true 
  },
  Etat:{
    type: String,
    enum: ['completed', 'active'],
    default: 'active'
  },
  Description: String,
  QuantiteCible: Number,
  QuantiteCollecte: {
     type: Number,
     default: 0
     },
  DateDebut: {
    type: Date,
    default: Date.now
  },
  DateFin: Date
});

export const Campaign = mongoose.model("Campaign", campaignSchema);

