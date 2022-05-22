import React from "react";
import { Card } from "semantic-ui-react";

const Student = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.designation}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Student;
