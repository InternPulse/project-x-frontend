import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import HireTalent from "./pages/HireTalent";
import Home from "./pages/home/Home";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import "cal-sans";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/HireTalent" element={<HireTalent />} />
        <Route path="*" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
