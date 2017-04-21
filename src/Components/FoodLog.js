import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import {
  Grid, Row, Col
} from 'react-bootstrap';
import FoodLogList from './FoodLogList';

class FoodLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodReports: []
    }
    this.loadData = this.loadData.bind(this)
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

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>Food Log</h1>
              <FoodLogList
                data={this.state.foodReports}/>
            </Col>
          </Row>

        </Grid>
      </div>
    )
  }
}

export default FoodLog;
