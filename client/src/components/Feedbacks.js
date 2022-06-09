import React from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import "../css/App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import VerticalNavigation from "./VerticalNavigation";
import Timeline from "react-timeline-semantic-ui";
import Feedback from "./Feedback";

const Feedbacks = (props) => {
  return (
    <Container fluid={true}>
      <MenuHeader token={props.token} setToken={props.setToken} />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalNavigation />
          </Grid.Column>
          <Grid.Column width={13}>
            <div
              style={{
                textAlign: "center",
                padding: "10px",
                marginTop: "10px",
                textAlign: "center",
                border: "1px solid black",
                padding: "10px",
                marginLeft: "10px",
                borderRadius: "10px",
              }}
            >
              <h2>Group Feedback</h2>
            </div>
            <div style={{ margin: "10px", height:"20px"}}>
             <Feedback style={{marginBottom: "20px"}} /> 
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer></Footer>
    </Container>
  );
};

export default Feedbacks;
