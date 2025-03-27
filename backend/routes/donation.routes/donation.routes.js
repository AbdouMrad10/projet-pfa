import express from "express";
import { createDonation, getDonationsByCampaign } from "../../controllers/donation.controller.js";
const router = express.Router();
router.post("/donations", createDonation);
router.get("/donations/:campaignId", getDonationsByCampaign);
export default router;