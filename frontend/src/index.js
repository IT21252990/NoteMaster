import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthContextProvider } from "./context/AuthContext";
import { NotesContextsProvider } from "./context/NotesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NotesContextsProvider>
        <App />
      </NotesContextsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
