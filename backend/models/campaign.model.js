import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  status: {
    type: String,
    enum: ['completed', 'active'],
    default: 'active',
    index: true
  },
  description: String,
  collectedQuantity: { 
    type: Number, 
    default: 0, 
    min: 0 
  },
  targetQuantity: {
     type: Number,
     default: 0,
     min: 0
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    validate: {
      validator: function(value) {
        return !value || value > this.startDate;
      },
      message: "End date must be after start date"
    }
  }
});

export const Campaign = mongoose.model("Campaign", campaignSchema);
