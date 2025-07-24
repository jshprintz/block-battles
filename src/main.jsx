import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { StoreContext } from "./server/stores/StoreContext.js";
import { teamDataStore } from "./server/stores/TeamDataStore";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContext.Provider value={teamDataStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>
);
