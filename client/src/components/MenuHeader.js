import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

export default class MenuHeader extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment>
          <Menu secondary>
            <Menu.Item
              name="student helper"
              active={activeItem === "student helper"}
              color={"red"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="add new project"
              active={activeItem === "add new project"}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}
