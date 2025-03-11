import express from "express";
import { createCampaign, deleteCampaign, getAllCampaigns, getCampaign, updateCampaign } from "../../controllers/campaign.controller.js";

const router = express.Router();

router.get("/campaings",getAllCampaigns);

router.get("/campaign/:id",getCampaign);

router.post("/create-campaign",createCampaign);

router.put("/update-campaign/:id",updateCampaign);

router.delete("/delete-campaign/:id",deleteCampaign);


export default router;