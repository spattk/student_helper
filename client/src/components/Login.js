import React, { useState } from "react";
import { Button, Checkbox, Container, Form, Grid } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import "./Login.css";
import MenuHeader from "./MenuHeader";
import VerticalNavigation from "./VerticalNavigation";

async function loginUser(credentials) {
  return fetch("http://localhost:5001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then((res) => res);
}

const Login = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log(token);
    props.setToken(token);
  };

  return (
    <Container fluid={true}>
      <div>
        <MenuHeader setToken={props.setToken} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <VerticalNavigation />
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={5}>
              <h2
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  border: "1px solid black",
                  marginLeft: "10px",
                  marginRight: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                {" "}
                Login
              </h2>
              <Form
                style={{
                  padding: "20px",
                  border: "1px solid #193D62",
                  margin: "10px",
                  borderRadius: "10px",
                }}
              >
                <Form.Field>
                  <label>Username</label>
                  <input
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Field>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#193D62", color: "white" }}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Footer></Footer>
    </Container>
  );
};

export default Login;
