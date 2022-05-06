import React, { Component, useEffect } from "react";
import { Image, Item } from 'semantic-ui-react'

const Project = (props) => {
  return (
    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header as="a">{props.name}</Item.Header>
        <Item.Meta>Project Metadata</Item.Meta>
        <Item.Description>
          {props.description}
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Project;
