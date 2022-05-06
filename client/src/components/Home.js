import React from "react";
import { Container, Grid } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import RecentProjects from "./RecentProjects";
import VerticalNavigation from "./VerticalNavigation";

function Home() {
  return (
    <Container fluid={true}>
      <MenuHeader />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <RecentProjects />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer></Footer>
    </Container>
  );
}

export default Home;
