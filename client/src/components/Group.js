import React from "react";
import { Card } from "semantic-ui-react";

const Group = (props) => {
  return (
    <Card style={{ maxWidth: "250px", border: "1px solid #193D62" }}>
      <Card.Content>
        <Card.Header>Group {props.name}</Card.Header>
      </Card.Content>
      <Card.Content
        description={
          <div>
            {props.devs.map((dev) => (
              <p>{dev}</p>
            ))}
          </div>
        }
      />
    </Card>
  );
};

export default Group;
