import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class FoodLogTable extends Component {
  render() {
    const rows = this.props.data.nutrients.map(function(nutrient, idx) {
      const measures = nutrient.measures.map(function(measure, idx) {
        return (<td key={idx}>{measure.value}</td>)
      })
      return (
        <tr key={idx}>
          <td>{nutrient.name}</td>
          <td>{nutrient.unit}</td>
          <td>{nutrient.value}</td>
          {measures}
        </tr>
      )
    })

    const measureHeadings = this.props.data.nutrients[0].measures.map(function(measure, idx) {
      return (<th key={idx}>{measure.qty} {measure.label} {measure.eqv}{measure.eunit}</th>)
    })

    return (
      <Table fill striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit</th>
            <th>100g</th>
            {measureHeadings}
          </tr>
        </thead>
        <tbody>

            {rows}

        </tbody>
      </Table>
    )
  }
}

export default FoodLogTable;
