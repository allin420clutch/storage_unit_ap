import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout/Layout';

// Lazy loaded routes for better speed and scalability
const Home = lazy(() => import('./pages/Home'));
const Units = lazy(() => import('./pages/Units'));
const Auctions = lazy(() => import('./pages/Auctions'));
const Payment = lazy(() => import('./pages/Payment'));
const Delinquent = lazy(() => import('./pages/Delinquent'));
const CameraManager = lazy(() => import('./pages/CameraManager'));
const Login = lazy(() => import('./features/auth/Login'));

const PageLoader = () => (
    <div className="container py-20 text-center text-muted">Loading module...</div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Suspense fallback={<PageLoader />}>
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
              <Route
                path="/admin/cameras"
                element={
                  <ProtectedRoute>
                    <CameraManager />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
