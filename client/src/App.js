import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Home";
import Kanban from "./components/Kanban";
import Students from "./components/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="kanban" element={<Kanban />} />
    </Routes>
  );
}

export default App;
