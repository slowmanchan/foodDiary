import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import FoodRow from './FoodRow';

class FoodTable extends Component {
  render() {
    const rows = this.props.data.map(function(item, idx) {
      return <FoodRow
                addData={this.props.addData}
                key={idx}
                item={item}
                />
    }.bind(this))

    return (

      <Table striped bordered condensed hover>
        <thead>
          <tr><th colSpan={2}>Results</th></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>

    )
  }
}

export default FoodTable
