import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdwordLayout from '../Adwords/AdwordLayout';
import CampLayout from '../MailsNow/CampLayout';
import AdsLayout from '../Ads/AdsLayout';
import PlanerLayout from '../MarketingPlaner/PlanerLayout';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/marketing-planer/*" element={<PlanerLayout />} />
      <Route path="/mails-now/*" element={<CampLayout />} />
      <Route path="/adwords/*" element={<AdwordLayout />} />
      <Route path="/ads/*" element={<AdsLayout />} />
    </Routes>
  );
};

export default MainRouter;
