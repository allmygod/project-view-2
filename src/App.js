import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import List from "./pages/List.jsx";
import Edit from "./pages/Edit.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/projects" />} />
        <Route path="/projects" element={<List />} />
        {/* <Route path="/projects/new" element={<Create />} /> */}
        {/* <Route path="/projects/:projectId" element={<Detail />} /> */}
        <Route path="/projects/:projectId/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
