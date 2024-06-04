import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CharacterProvider } from "./context/CharacterContext/CharacterContext";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>
);
