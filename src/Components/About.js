import React, {Component} from 'react';
import NavBar from './NavBar';
import {
  Grid, Row, Col, PageHeader
} from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
        <Row>
        <Col xs={12}>
        <PageHeader>About</PageHeader>
        <p>
        This app has the good stuff.  track all
        of the food you eat and i{"'"}ll tell you how your doing
        </p>
        </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

export default About
