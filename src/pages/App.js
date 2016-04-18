import React from 'react';
import Link from 'react-router';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Groups from './Groups';

export default React.createClass ({
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1}>Logout</NavItem>
          </Nav>
        </Navbar>
        <h1>Euro 2016</h1>
        {this.props.children}
      </div>
      );
  }
})
