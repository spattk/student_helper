import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Students from "./components/Students";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="students" element={<Students />} />
    </Routes>
  );
}

export default App;
