import React from "react";
import { Card } from "semantic-ui-react";

const User = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta style={{textTransform:'capitalize'}}>{props.designation}</Card.Meta>
        <Card.Description>
          <div >
            <b>Username:</b> {props.username} <br/>
            <b>Email </b>: {props.email} <br/>
            <b>Phone </b>: {props.phone} <br/>
            <b>Dept </b>: {props.department} <br/>
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default User;
