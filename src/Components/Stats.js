import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodReports: []
    }
    this.loadData = this.loadData.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    axios.get('/api/food-logs')
      .then(function(res) {
        this.setState({
          foodReports: res.data
        })
      }.bind(this))
      .catch(function(err) {
        console.log(err)
      })
  }

  render() {
    const { foodReports } = this.state;
    console.log(foodReports)
    if (!foodReports) {
      return (
          <div>Loading..</div>
      )
    }

    const resultList = {}
    foodReports.forEach((item) => {
      item.food.nutrients.forEach((nutrient) => {
        if (!resultList[nutrient.name]) {
          return resultList[nutrient.name] = Math.round(+nutrient.value)
        } else {
          return resultList[nutrient.name] += Math.round(+nutrient.value)
        }
     })
   })


    const resultArray = Object.keys(resultList)
                              .map((key) => { return { name: [key], value: resultList[key] } } )
                              .map((nutrient) => {
                                return <ListGroupItem>{nutrient.name} - {nutrient.value}</ListGroupItem>
                              })


    return(
      <div>
        <NavBar />
        <Grid>
          <Row>
            <Col>
              <h1>Stats</h1>
              <ListGroup>
                {resultArray}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>

    )

  }
}

export default Stats;
