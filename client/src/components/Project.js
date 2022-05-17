import React, { Component, useEffect } from "react";
import { Link, Routes, Route} from "react-router-dom";
import { Image, Item, Button } from "semantic-ui-react";
import Kanban from "./Kanban";

const Project = (props) => {
  return (
      <Item style={{ border: "1px dashed black", padding: "10px" }}>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">{props.name}</Item.Header>
          <Item.Meta>Project Metadata</Item.Meta>
          <Item.Description>{props.description}</Item.Description>

          <Item.Extra>
            <Link to={`/kanban/${props.project_id}`}>
              <Button primary>Kanban Board</Button>
            </Link>
          </Item.Extra>
        </Item.Content>
        
      </Item>

      
  );
};

export default Project;
