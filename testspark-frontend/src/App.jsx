import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import QuickTest from "./pages/QuickTest";
import ComprehensiveTest from "./pages/ComprehensiveTest";
import EvaluationRuns from "./pages/EvaluationRuns";
import RunDetails from "./pages/RunDetails";
import Benchmarks from "./pages/Benchmarks";
import Generator from "./pages/Generator";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // If not logged in → show login page
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Quick Test */}
        <Route
          path="/quick-test"
          element={
            <Layout>
              <QuickTest />
            </Layout>
          }
        />

        {/* Comprehensive Test */}
        <Route
          path="/comprehensive-test"
          element={
            <Layout>
              <ComprehensiveTest />
            </Layout>
          }
        />

        {/* Evaluation Runs */}
        <Route
          path="/runs"
          element={
            <Layout>
              <EvaluationRuns />
            </Layout>
          }
        />

        {/* Run Details (Dynamic Route) */}
        <Route
          path="/runs/:id"
          element={
            <Layout>
              <RunDetails />
            </Layout>
          }
        />

        {/* NEW PAGES */}
        <Route
          path="/benchmarks"
          element={
            <Layout>
              <Benchmarks />
            </Layout>
          }
        />

        <Route
          path="/generator"
          element={
            <Layout>
              <Generator />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}