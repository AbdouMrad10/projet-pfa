import mongoose from "mongoose";
const donationSchema = new mongoose.Schema({
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true
    },
    donorName: {
        type: String,
        require: true

    },
    donorEmail: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export const Donation = mongoose.model("Donation", donationSchema);