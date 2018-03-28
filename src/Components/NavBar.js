import React, {Component} from 'react';
import {
  Navbar, Nav, NavItem
} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';


class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Foodiary</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/'>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/about'>
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to='/search'>
              <NavItem>Diary</NavItem>
            </LinkContainer>
            <LinkContainer to='/food-logs'>
              <NavItem>Food-Logs</NavItem>
            </LinkContainer>
            <LinkContainer to='/stats'>
              <NavItem>Stats</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
