import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class FoodRow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addData(this.props.item.ndbno)
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>
          <Button
            bsStyle='warning'
            onClick={this.handleClick}
            >+
          </Button>
        </td>
      </tr>
    )
  }
}

export default FoodRow
