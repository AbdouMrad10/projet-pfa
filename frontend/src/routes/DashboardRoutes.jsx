import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CampaignsPage from "../pages/dashboard/CampaignsPage";
import CreateCampaignPage from "../pages/dashboard/CreateCampaignPage";

import MainLayout from "../layout/dashboard/MainLayout";
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/campaigns"
        element={
          <MainLayout>
            <CampaignsPage />
          </MainLayout>
        }
      />
      <Route
        path="/create-campaign"
        element={
          <MainLayout>
            <CreateCampaignPage />
          </MainLayout>
        }
      />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default DashboardRoutes;