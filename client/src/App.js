import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Home";
import Kanban from "./components/Kanban";
import Projects from "./components/Projects";
import Students from "./components/Students";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="users" element={<Users />} />
      <Route path="projects" element={<Projects />} />
      <Route path="kanban/:id" element={<Kanban />} />
    </Routes>
  );
}

export default App;
