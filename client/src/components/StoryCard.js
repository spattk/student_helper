import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import "../App.css";

const StoryCard = (props) => {
  const [addrtype, setAddrtype] = useState([
    "<status>",
    "TODO",
    "IN_PROGRESS",
    "IN_REVIEW",
    "COMPLETED",
  ]);
  const Add = addrtype.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    let storyId = e.target.parentElement.id;
    let updatedStoryStatus = addrtype[e.target.value];
    console.log(addrtype[e.target.value] + " " + storyId);
    console.log(updatedStoryStatus);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        story_name: "Create Story API",
        story_description: "Kanban board story create API",
        story_points: "2",
        status: updatedStoryStatus,
      }),
    };
    fetch(`http://localhost:5001/stories/${storyId}`, requestOptions).then(
      (response) =>
        response.json().then((result) => {
          console.log(result);
          props.update_story_handler();
        })
    );
  };

  return (
    <Card style={props.card_style}>
      <Card.Content>
        <Card.Description content={props.content} style={props.text_style} />
        <br />
        <div
          style={{ width: "50%", float: "right", fontSize: "13px" }}
          id={props.story_id}
        >
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            className="custom-select"
          >
            {Add.map((address, key) => (
              <option key={key} value={key}>
                {address}
              </option>
            ))}
          </select>
        </div>
      </Card.Content>

      <Card.Content extra>
        <a style={props.text_style}>
          <Icon name="user" />
          {props.developer_name}
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
          KB-{props.story_id}
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
          <Icon name="clock outline" />
          {props.story_points}
        </a>
      </Card.Content>
    </Card>
  );
};

export default StoryCard;
