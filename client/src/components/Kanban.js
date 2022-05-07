import React from "react";
import { Container, Grid, Card, CardGroup } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import RecentProjects from "./RecentProjects";
import VerticalNavigation from "./VerticalNavigation";

const Kanban = () => {
  return (
    <Container fluid={true}>
      <MenuHeader />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <h1>Project Name</h1>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>TODO</h4>
                  <Card.Group>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Matthew is a pianist living in Nashville.
                          Matthew is a pianist living in Nashville.
                          Matthew is a pianist living in Nashville.
                        </Card.Description>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>DEV</h4>
                  <Card.Group>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Matthew is a pianist living in Nashville.
                        </Card.Description>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>QA/REVIEW</h4>
                  <Card.Group>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Matthew is a pianist living in Nashville.
                        </Card.Description>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>RELEASED</h4>
                  <Card.Group>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Matthew is a pianist living in Nashville.
                        </Card.Description>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Card.Description content="Jake is a drummer living in New York." />
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer></Footer>
    </Container>
  );
};

export default Kanban;
