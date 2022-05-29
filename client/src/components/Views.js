import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Kanban from "./Kanban";
import Login from "./Login";
import Projects from "./Projects";
import Students from "./Students";
import Users from "./Users";

const Views = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard setToken={props.setToken} />} />
      <Route path="students" element={<Students setToken={props.setToken} />} />
      <Route path="users" element={<Users setToken={props.setToken}/>} />
      <Route path="projects" element={<Projects setToken={props.setToken}/>} />
      <Route path="kanban/:id" element={<Kanban setToken={props.setToken}/>} />
      {/* <Route path="login" element={<Login setToken={setToken} />} /> */}
    </Routes>
  );
};

export default Views;
