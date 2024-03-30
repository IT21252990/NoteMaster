import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import WellcomePage from "./pages/WellcomePage";
import LernMore from "./pages/LearnMore";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WellcomePage />} />
          <Route path="/lern_more" element={<LernMore />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
