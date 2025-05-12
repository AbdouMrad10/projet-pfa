import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebMainLayout from "../layout/WebMainLayout";
import { HomePage } from "../pages/web/HomePage";
import { About } from "../pages/web/About";
import { Contact } from "../pages/web/Contact";
import { Campaigns } from "../pages/web/Campaigns";
import { NotFound } from "../pages/web/NotFound";
import { CampaignDetails } from "../pages/web/CampaignDetails";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/"  element={<WebMainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="campaigns/:id" element={<CampaignDetails />} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;