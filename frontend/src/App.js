import { BrowserRouter, Routes, Route , Navigate  } from "react-router-dom";
import React from "react";

import { useAuthContext } from "./hooks/useAuthContext";

import WellcomePage from "./pages/WellcomePage";
import LernMore from "./pages/LearnMore";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home" ;

function App() {

  const { user } = useAuthContext()

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WellcomePage />} />
          <Route path="/lern_more" element={<LernMore />} />
          <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/home" />} />
          <Route path="/login"   element={!user ? <LoginPage /> : <Navigate to="/home" />} />
          <Route path="/home"  element={user ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
