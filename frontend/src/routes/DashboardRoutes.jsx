import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CampaignsPage from "../pages/dashboard/CampaignsPage";
import CreateCampaignPage from "../pages/dashboard/CreateCampaignPage";

import MainLayout from "../layout/dashboard/MainLayout";
import  HomePage  from "../pages/dashboard/HomePage";
import CampaignUpdate from "../pages/dashboard/CampaignUpdate";
const DashboardRoutes = () => {
  return (
    <Routes>

        <Route path="dashboard" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="create-campaign" element={<CreateCampaignPage />} />
          <Route path="update-campaign/:id" element={<CampaignUpdate />} />
          
        </Route>
    </Routes>
  );
};

export default DashboardRoutes;