import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "../App.css";
import GridExampleDividedNumber from "./GridDivider";

import MenuHeader from "./MenuHeader";
import RecentProjects from "./RecentProjects";
import VerticalNavigation from "./VerticalNavigation";
import { Grid, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";

function Home() {
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

      <Footer></Footer>
    </Container>
  );
}

export default Home;
