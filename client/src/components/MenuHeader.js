import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

export default class MenuHeader extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment style={{backgroundColor: '#193D62'}}>
          <Menu style={{backgroundColor: '#193D62', border:'1px solid white'}}>
            <Menu.Item
              name="student helper"
              active={activeItem === "student helper"}
              onClick={this.handleItemClick}
              style={{color:"white", fontWeight: "bold"}}
            />
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              style={{color:"white", fontWeight: "bold"}}
            />

            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
                style={{color:"white", fontWeight: "bold"}}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}
