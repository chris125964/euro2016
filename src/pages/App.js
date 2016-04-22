import React from 'react';
import Link from 'react-router';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Groups from './Groups';

export default React.createClass ({

  contextTypes: {
      router: React.PropTypes.object
  },

  handleSelect(selectedKey) {
    let path= "";
    if (selectedKey === 1) {
      path='/user';
    }
    else if (selectedKey === 2) {
       path='/groups';
    }
    else if (selectedKey === 3) {
       path='/tables';
    }
    this.context.router.push(path);
  },

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              Euro 2016 Tipprunde
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight onSelect={this.handleSelect}>
            <NavItem eventKey={1}>Users</NavItem>
            <NavItem eventKey={2}>Groups</NavItem>
            <NavItem eventKey={3}>Tables</NavItem>
            <NavItem eventKey={4}>Logout</NavItem>
          </Nav>
        </Navbar>
        <h1>Euro 2016</h1>
        {this.props.children}
      </div>
      );
  }
})
