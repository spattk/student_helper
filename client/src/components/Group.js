import React from "react";
import { Button, Card } from "semantic-ui-react";

const Group = (props) => {
  const clickFeedbackHandler = async () => {
    window.location.href = "/groups/1/feedback";
  };

  return (
    <Card style={{ maxWidth: "250px", border: "1px solid #193D62" }}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
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
      <Button
        style={{ backgroundColor: "#193D62", color: "white" }}
        onClick={clickFeedbackHandler}
      >
        View Feedback
      </Button>
    </Card>
  );
};

export default Group;
