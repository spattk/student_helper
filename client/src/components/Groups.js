import React, { useEffect, useState } from "react";
import {
    Card,
    Container, Grid
} from "semantic-ui-react";
import "../css/App.css";
import Footer from "./Footer";
import Group from "./Group";
import MenuHeader from "./MenuHeader";
import VerticalNavigation from "./VerticalNavigation";

const Groups = (props) => {
  const [allGroups, setAllGroups] = useState([]);

  const getAllGroups = async () => {
    try {
      const response = await fetch("/groups");
      const jsonData = await response.json();
      setAllGroups(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllGroups();
  }, []);

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
              <h2>All Groups</h2>
            </div>
            <div style={{ margin: "10px", marginBottom: "70px" }}>
              <Card.Group>
                {allGroups.map((group) => (
                  <Group
                    devs={group.developers}
                    id={group.group_id}
                    name={group.groupName}
                  />
                ))}
              </Card.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer></Footer>
    </Container>
  );
};

export default Groups;
