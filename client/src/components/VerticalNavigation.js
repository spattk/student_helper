import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='groups'
          active={activeItem === 'groups'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='students'
          active={activeItem === 'students'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
