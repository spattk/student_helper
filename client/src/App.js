import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Home";
import Students from "./components/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
    </Routes>
  );
}

export default App;
