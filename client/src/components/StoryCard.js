import React from "react";
import { Card, Icon } from "semantic-ui-react";
import "../App.css";

const StoryCard = (props) => {
  return (
    <Card style={props.card_style}>
      <Card.Content>
        <Card.Description content={props.content} style={props.text_style} />
      </Card.Content>
      <Card.Content extra>
        <a style={props.text_style}>
          <Icon name="user" />
          Developer
        </a>
        <a
          style={
            (props.text_style,
            {
              position: "absolute",
              right: "55px",
              color: "white",
              border: "1px dashed black",
              padding: "3px",
              borderRadius: "5px",
            })
          }
        >
          TS-123
        </a>

        <a
          style={
            (props.text_style,
            {
              position: "absolute",
              right: "10px",
              color: "white",
              border: "1px dashed black",
              padding: "3px",
              borderRadius: "5px",
            })
          }
        >
          <Icon name="clock outline" />2
        </a>
      </Card.Content>
    </Card>
  );
};

export default StoryCard;
