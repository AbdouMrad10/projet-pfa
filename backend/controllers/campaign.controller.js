import mongoose from 'mongoose';
import  { Campaign } from '../models/campaign.model.js';

export const getAllCampaigns = async (req, res) => {
    try{
        const campaigns = await Campaign.find();
        if (!campaigns) {
            return res.status(404).json({ message: "No campaign found" });
        }
        res.json({
            message: "All campaigns",
            data: campaigns
        });
    }
    catch (error) {
        res.status(500).json({ error : 'error in getting all campaigns' , message: error.message });
    }

}

export const getCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid campaign id" });
        }
        const campaign = await Campaign.findById(id);
        if (!campaign) {
            return res.status(404).json({ message: "Campaign not found" });
        }
        res.json({
            message: "Campaign found",
            data: campaign
        });
    }
    catch (error) {
        res.status(500).json({ error : 'error in getting campaign' , message: error.message });
    }

}

export const createCampaign = async (req, res) => {
    const { Titre, Etat,Description, QuantiteCible , QuantiteCollecte, DateDebut, DateFin } = req.body;
    const newCampaign = new Campaign({
        Titre ,
        Etat,
        Description ,
        QuantiteCible ,
        QuantiteCollecte,
        DateDebut ,
        DateFin,
    })
    await newCampaign.save();
    res.json({
        message: "Campaign created successfully",
        data: newCampaign
    });
}

export const updateCampaign = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid campaign id" });
        }

        const { Titre, Etat, Description, QuantiteCible, QuantiteCollecte, DateDebut, DateFin } = req.body;

        const updatedCampaign = await Campaign.findByIdAndUpdate(
            id,
            {
                Titre,
                Etat,
                Description,
                QuantiteCible,
                QuantiteCollecte,
                DateDebut,
                DateFin,
            },
            { new: true } // Return the updated document
        );

        if (!updatedCampaign) {
            return res.status(404).json({ message: "Campaign not found" });
        }

        res.json({
            message: "Campaign updated successfully",
            data: updatedCampaign,
        });
    } catch (error) {
        res.status(500).json({ error: 'error in updating campaign', message: error.message });
    }
};

export const deleteCampaign = async (req, res) => {
    try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: "Invalid campaign id" });
    }
    const deletedCampaign = await Campaign.findByIdAndDelete(id);
    if (!deleteCampaign) {
        return res.status(404).json({ message: "Campaign not found" });
    }
    res.json({
        message: "Campaign deleted successfully",
        data: deletedCampaign
    });
    }
     catch (error) {
    res.status(500).json({ error : 'error in deleting campaign' , message: error.message });
    }

}