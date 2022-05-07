import React from "react";
import { Container, Grid, Card, CardGroup } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import RecentProjects from "./RecentProjects";
import VerticalNavigation from "./VerticalNavigation";

const StoryCard = (props) => {
  return (
    <Card style={props.card_style}>
      <Card.Content>
        <Card.Description
          content={props.content}
          style={props.text_style}
        />
      </Card.Content>
    </Card>
  );
};

export default StoryCard;
