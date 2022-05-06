import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import Footer from "./components/Footer";
import GridExampleDividedNumber from "./components/GridDivider";

import MenuHeader from "./components/MenuHeader";
import RecentProjects from "./components/RecentProjects";
import VerticalNavigation from "./components/VerticalNavigation";
import { Grid, Image } from "semantic-ui-react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import  Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
  );
}

export default App;
