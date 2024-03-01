import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
