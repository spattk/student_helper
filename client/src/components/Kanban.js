import React from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import StoryCard from "./StoryCard";
import VerticalNavigation from "./VerticalNavigation";

const Kanban = (props) => {
  const styles = [
    {
      backgroundColor: "#f8ad9d",
    },
    {
      backgroundColor: "#f6bd60",
    },
    {
      backgroundColor: "#2ec4b6",
    },
    {
      backgroundColor: "#0077b6",
    },
  ];

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
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    <StoryCard
                      content="Matthew is a pianist living in Nashville. Matthew is a
                          pianist living in Nashville. Matthew is a pianist
                          living in Nashville."
                      card_style={styles[0]}
                    />

                    <StoryCard
                      content="Jake is a drummer living in New York."
                      card_style={styles[0]}
                    />

                    <StoryCard
                      content="Jake is a drummer living in New York."
                      card_style={styles[0]}
                    />
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>DEV</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    <StoryCard
                      content="Matthew is a pianist living in Nashville."
                      card_style={styles[1]}
                    />

                    <StoryCard
                      content="Jake is a drummer living in New York."
                      card_style={styles[1]}
                    />
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>QA/REVIEW</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    <StoryCard
                      content="Matthew is a pianist living in Nashville."
                      card_style={styles[2]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Jake is a drummer living in New York."
                      card_style={styles[2]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Jake is a drummer living in New York."
                      card_style={styles[2]}
                      text_style={{ color: "white" }}
                    />
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>RELEASED</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    <StoryCard
                      content="Matthew is a pianist living in Nashville."
                      card_style={styles[3]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Matthew is a pianist living in Nashville."
                      card_style={styles[3]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Matthew is a pianist living in Nashville."
                      card_style={styles[3]}
                      text_style={{ color: "white" }}
                    />
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
