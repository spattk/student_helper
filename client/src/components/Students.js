import React from "react";
import { useEffect, useState } from "react";
import { Container, Grid, Card, CardGroup } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import Student from "./Student";
import VerticalNavigation from "./VerticalNavigation";

const Students = () => {
  const [allStudents, setAllStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const response = await fetch("http://localhost:5001/users/students");
      const jsonData = await response.json();
      setAllStudents(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <Container fluid={true}>
      <MenuHeader />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <div style={{ border: "1px solid red" }}>
              <div style={{ textAlign: "center" }}>
                <b>Registered Students</b>
              </div>
              <div style={{margin:'10px'}}>
              <Card.Group>
                {allStudents.map((student) => (
                  <Student
                    name={student.first_name + " " + student.last_name}
                    designation="Student"
                  />
                ))}
              </Card.Group>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer></Footer>
    </Container>
  );
};

export default Students;
