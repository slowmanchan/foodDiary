import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import {
  Grid, Col, Row
} from 'react-bootstrap';
import AlertDismissable from './AlertDismissable';
const API_SECRET = 'api_key=T0sL90hjIuAX8XKABVoixwOGeGb0PKq9YrEViEx7';
import FoodTable from './FoodTable';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      foodReport: '',
      alertVisible: false,
      message: '',
      bsStyle: ''
    }
    this.loadData = this.loadData.bind(this);
    this.addData = this.addData.bind(this);
  }

  loadData(query) {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json';
    axios.get(
      `${url}&${API_SECRET}&q=${query}&ds=Standard+Reference&sort=n&max=200&offset=0`)
      .then(function(res) {
        this.setState({
          data: res.data.list.item
        })
      }.bind(this))
      .catch(function(err) {
        this.setState({
          alertVisible: true,
          message: 'Search returned no results',
          bsStyle: 'danger'
        })
      }.bind(this));
  }

  addData(foodItemNo) {
    const url = 'https://api.nal.usda.gov/ndb/reports/?format=json'
    axios.get(
      `${url}&${API_SECRET}&ndbno=${foodItemNo}&type=b`
    )
    .then(function(res){
      this.setState({
        foodReport: res.data.report
      })
      axios.post('/', this.state.foodReport)
        .then(function(res) {
          this.setState({
            alertVisible: true,
            message: 'Food added successfully',
            bsStyle: 'success'
          })
        }.bind(this))
        .catch(function(err) {
          console.log(err)
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
              {this.state.alertVisible &&
                <AlertDismissable
                  message={this.state.message}
                  bsStyle={this.state.bsStyle}
                /> }

              <h1>Diary</h1>
              <SearchBar loadData={this.loadData}/>
              <br/>
              {this.state.data.length > 0 && <FoodTable
                addData={this.addData}
                data={this.state.data}/>}

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default SearchContainer;
