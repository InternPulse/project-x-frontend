import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";

const Home = lazy(() => import("./pages/home/Home"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Enrollment = lazy(() => import("./pages/enrollment"));
const Welcome = lazy(() => import("./pages/welcome/Welcome"));
const HireTalent = lazy(() => import("./pages/HireTalent/HireTalent"));
const Dashboard = lazy(() => import("./pages/dashboard/Index"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const PaymentGateway = lazy(() =>
  import("./pages/paymentGateway/PaymentGateway")
);

import "cal-sans";
import PaymentOptions from "./pages/paymentOptions/PaymentOptions";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/HireTalent" element={<HireTalent />} />
          <Route path="/Enrollment" element={<Enrollment />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/payments" element={<PaymentGateway />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
