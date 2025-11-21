import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Units from './pages/Units';
import Payment from './pages/Payment';
import Delinquent from './pages/Delinquent';
import Auctions from './pages/Auctions';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delinquent" element={<Delinquent />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
