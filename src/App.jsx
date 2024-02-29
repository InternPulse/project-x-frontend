import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import HireTalent from "./pages/HireTalent";
import "cal-sans";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/HireTalent" element={<HireTalent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
