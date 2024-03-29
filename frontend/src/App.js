import { BrowserRouter , Routes , Route } from "react-router-dom"
import React from "react";

import WellcomePage from "./pages/wellcomePage";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element = {<WellcomePage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
