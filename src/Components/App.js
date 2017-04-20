import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  hashHistory,
  Route,
  Link
} from 'react-router';
import {Panel, Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Col, Grid, Row, PageHeader} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <h1>Finally something that works</h1>
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/diary' component={Diary}/>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid fluid>
         <Row>
          <Col xs={12}>
        <Jumbotron>
          <h1>The Foodiary</h1>
          <p>The beginnings of a great food diary</p>
          <Button bsStyle='success'>Do it</Button>
        </Jumbotron>
        </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
        <Row>
        <Col xs={12}>
        <PageHeader>About</PageHeader>
        <p>This app has the good stuff</p>
        </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

class Diary extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Diary</h1>
      </div>
    )
  }
}

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
            <LinkContainer to='/diary'>
              <NavItem>Diary</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
