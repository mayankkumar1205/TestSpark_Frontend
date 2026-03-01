import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import QuickTest from "./pages/QuickTest";
import ComprehensiveTest from "./pages/ComprehensiveTest";
import EvaluationRuns from "./pages/EvaluationRuns";
import Login from "./pages/Login";
import RunDetails from "./pages/RunDetails";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/quick-test"
          element={
            <Layout>
              <QuickTest />
            </Layout>
          }
        />
        <Route
          path="/comprehensive-test"
          element={
            <Layout>
              <ComprehensiveTest />
            </Layout>
          }
        />
        <Route
          path="/runs"
          element={
            <Layout>
              <EvaluationRuns />
            </Layout>
          }
        />
        <Route
  path="/runs/:id"
  element={
    <Layout>
      <RunDetails />
    </Layout>
  }
/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}