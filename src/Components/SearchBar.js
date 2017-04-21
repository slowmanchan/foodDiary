import React, {Component} from 'react';
import {
  Form, FormGroup, FormControl, ControlLabel,
  Button
} from 'react-bootstrap';

class SearchBar extends Component {
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

export default SearchBar;
