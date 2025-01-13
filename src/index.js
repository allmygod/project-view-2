import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectProvider } from "./contexts/ProjectContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </BrowserRouter>
  </React.StrictMode>
);
