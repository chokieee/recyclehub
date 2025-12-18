import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RewardsPage from './components/RewardsPage';
import MapPage from './components/MapPage';
import UserAnalysisPage from './components/UserAnalysisPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rewards" element={<RewardsPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/analysis" element={<UserAnalysisPage />} />
    </Routes>
  );
}

export default App;
