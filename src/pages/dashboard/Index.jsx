import React from "react";
import Layout from "./layout";
import Certificate from "./pages/certificateCard";
import Home from "./pages/dashboardHome";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Enquiry from "./pages/enquiry";
import Slack from "./pages/slack";
import { Route, Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/*" />
        <Route element={<Certificate />} path="/certificate" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Team />} path="/team" />
        <Route element={<Slack />} path="/slack" />
        <Route element={<Enquiry />} path="/enquiry" />
      </Routes>
    </Layout>
  );
}
