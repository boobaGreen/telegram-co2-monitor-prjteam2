import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import EstimatedEmissions from './components/EstimatedEmissions/EstimatedEmissions';
import PlantTree from './components/PlantTree/PlantTree';
import PaypalPurchase from './components/PaypalLink/PaypalPurchase';
import TelegramAuthCallback from './components/Auth/TelegramAuthCallback.js'; // Import the component for handling Telegram authentication callback

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estimatedemissions" element={<EstimatedEmissions />} />
        <Route path="/planttree" element={<PlantTree />} />
        <Route path="/paypalpurchase" element={<PaypalPurchase />} />
        <Route path="/auth/telegram/callback" element={<TelegramAuthCallback />} /> {/* Add route for Telegram authentication callback */}
      </Routes>
    </Router>
  );
};

export default App;
