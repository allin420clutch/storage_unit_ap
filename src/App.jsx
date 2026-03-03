import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Units from './pages/Units';
import Payment from './pages/Payment';
import Delinquent from './pages/Delinquent';
import Auctions from './pages/Auctions';
import Login from './features/auth/Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/units" element={<Units />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route
              path="/delinquent"
              element={
                <ProtectedRoute>
                  <Delinquent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
