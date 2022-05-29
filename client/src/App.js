import React, { createContext, useState } from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Kanban from "./components/Kanban";
import Projects from "./components/Projects";
import Students from "./components/Students";
import Login from './components/Login';
import useToken from './useToken';
import Users from "./components/Users";
import Views from "./components/Views";

export const UserContext = createContext();

function App() {
  const { token, setToken } = useToken();
  if (token == undefined || !token) {
    return <Login setToken={setToken} />
  }
  return (
   <Views setToken={setToken} /> 
  );
}

export default App;
