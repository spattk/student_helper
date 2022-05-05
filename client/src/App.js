import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import Footer from "./components/Footer";
import GridExampleDividedNumber from "./components/GridDivider";

import MenuHeader from "./components/MenuHeader";
import RecentProjects from "./components/RecentProjects";
import VerticalNavigation from "./components/VerticalNavigation";
import { Grid, Image } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <MenuHeader />

      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <RecentProjects/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer />
    </Container>
  );
}

export default App;
