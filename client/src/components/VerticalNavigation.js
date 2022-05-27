import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleVerticalPointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log(e + " @@@@@@ " + name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing vertical>
          <Link to="/dashboard">
            <Menu.Item
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/projects">
            <Menu.Item
              name="projects"
              active={activeItem === "projects"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/groups">
            <Menu.Item
              name="groups"
              active={activeItem === "groups"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/students">
            <Menu.Item
              name="students"
              active={activeItem === "students"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/users">
            <Menu.Item
              name="users"
              active={activeItem === "users"}
              onClick={this.handleItemClick}
            />
          </Link>

        </Menu>
      </Container>
    );
  }
}
