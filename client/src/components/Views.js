import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Groups from "./Groups";
import Feedbacks from "./Feedbacks";
import Kanban from "./Kanban";
import Profesors from "./Professors";
import Projects from "./Projects";
import Students from "./Students";
import Users from "./Users";

const Views = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="dashboard"
        element={<Dashboard token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="all-groups"
        element={<Groups token={props.token} setToken={props.setToken} />}
      />

      <Route
        path="all-students"
        element={<Students token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="all-professors"
        element={<Profesors token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="all-users"
        element={<Users token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="all-projects"
        element={<Projects token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="kanban/:id"
        element={<Kanban token={props.token} setToken={props.setToken} />}
      />
      <Route
        path="groups/:id/feedback"
        element={<Feedbacks token={props.token} setToken={props.setToken} />}
      />
      {/* <Route path="login" element={<Login setToken={setToken} />} /> */}
    </Routes>
  );
};

export default Views;
