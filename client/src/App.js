import React, { createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import Views from "./components/Views";
import useToken from "./useToken";

export const UserContext = createContext();

function App() {
  const { token, setToken } = useToken();
  if (token == "not approved" || !token) {
    return <Login setToken={setToken} />;
  }
  return <Views token={token} setToken={setToken} />;
}

export default App;
