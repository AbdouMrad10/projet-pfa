import mongoose from "mongoose";
import { Campaign } from "../models/Campaign.model.js";
import { Donation } from "../models/donation.model.js";

// Enregistrer un don et mettre à jour currentAmount de la campagn
export const createDonation = async(req, res) => {
    try {
        const { campaignId, donorName, donorEmail, amount, createdAt } = req.body;
        const newDonation = new Donation({
            campaignId,
            donorName,
            donorEmail,
            amount,
            createdAt
        });
        const result = await newDonation.save();
        console.log("donation  created:", result);
        await Campaign.findByIdAndUpdate(campaignId, {
            $inc: { collectedQuantity: amount }
        });
        res.status(201).json({
            message: "donation created successfully",
            data: result
        });


    } catch (error) {
        console.error("Error creating Donation:", error)
        res.status(500).json({
            error: "Error in creating Donation",
            message: error.message
        });
    }

};
//getDonationsByCampaign : Récupérer les dons associés à une campagne.
export const getDonationsByCampaign = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const donations = await Donation.find({ campaignId });
        if (!donations) {
            return res.status(404).json({
                message: "donations not found"
            })
        }
        res.json({
            message: "donations found",
            data: donations
        })
    } catch (error) {
        res.status(500).json({
            error: "error in getting donations",
            message: error.message
        });
    }
}