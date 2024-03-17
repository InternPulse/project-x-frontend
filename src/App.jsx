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
import ProfileForm from "./pages/auth/ProfileForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentGateway = lazy(() =>
  import("./pages/paymentGateway/PaymentGateway")
);
const OrderConfirmation = lazy(() =>
  import("./pages/OrderConfirmation/OrderConfirmation")
);

const PaymentOptions = lazy(() =>
  import("./pages/paymentOptions/PaymentOptions")
);
import "cal-sans";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/HireTalent" element={<HireTalent />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/payments" element={<PaymentGateway />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/profileForm" element={<ProfileForm />} />
          <Route path="*" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
