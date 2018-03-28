import {
  Grid, Row, Col, Jumbotron, Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import React, {Component} from 'react';
import NavBar from './NavBar';

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
                <p>The beginnings of a great fsdfood diary</p>
                <LinkContainer to='/search'>
                  <Button bsStyle='success'>Do it</Button>
                </LinkContainer>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home;
