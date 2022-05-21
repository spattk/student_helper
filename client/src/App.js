import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Home";
import Kanban from "./components/Kanban";
import Projects from "./components/Projects";
import Students from "./components/Students";
import Login from './components/Login';
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="projects" element={<Projects />} />
      <Route path="kanban/:id" element={<Kanban />} />
      <Route path="login" element={<Login setToken={setToken} />} />
    </Routes>
  );
}

export default App;
