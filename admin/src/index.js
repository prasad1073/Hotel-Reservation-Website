import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { AuthContextProvider } from "../src/context/AuthContext";
import { DarkModeContextProvider } from "../src/context/darkModeContext";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);