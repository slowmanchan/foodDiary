import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  hashHistory,
  Route,
  Link
} from 'react-router';
import axios from 'axios';
import {Panel, Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table, Col, Grid, Row, PageHeader} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';

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
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.loadData = this.loadData.bind(this);
  }

  loadData(query) {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json';
    const api_key = '&api_key=730AqE7KBQTgBoA2sh5IB77UuI6smkZdGyOdEDQd&location=Denver+CO'
    axios.get(
      `${url}${api_key}&q=${query}&ds=Standard+Reference&sort=n&max=200&offset=0`)
      .then(function(res) {
        this.setState({
          data: res.data.list.item
        })
      }.bind(this))
      .catch(function(err) {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <NavBar />
          <Grid>
            <Row>
              <Col xs={12}>
                <h1>Diaryyy</h1>
                <Search loadData={this.loadData}/>
                {(this.state.data.length > 0)
                  && <FoodTable data={this.state.data}/>
                }
              </Col>
          </Row>
        </Grid>
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

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value,
      data: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loadData(this.state.search);
  }

  render() {
    return (

      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formSearch">
          <ControlLabel>Search</ControlLabel>
          <FormControl
            type="text"
            name="q"
            value={this.state.search}
            onChange={this.handleChange}
          />

        </FormGroup>
        <Button bsStyle='success' type="submit">
        GO
        </Button>

      </Form>

    )
  }
}

class FoodTable extends Component {
  render() {
    const rows = this.props.data.map(function(item, idx) {
      return <FoodRow key={idx} item={item}/>
    })

    return (
      <Grid>
      <Row>
      <Col xs={12}>
      <Table striped bordered condensed hover>
        <thead>
          <tr><th colSpan={2}>Results</th></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
      </Col>

      </Row>
      </Grid>
    )
  }
}

class FoodRow extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td><Button bsStyle='warning'>+</Button></td>
      </tr>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
