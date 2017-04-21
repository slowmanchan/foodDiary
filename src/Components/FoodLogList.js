import React, {Component} from 'react';
import {
  Panel, Accordion
} from 'react-bootstrap';
import FoodLogTable from './FoodLogTable';

class FoodLogList extends Component {

  render() {
    const rows = this.props.data.map(function(item, idx) {
      return <Panel bsStyle='info' header={item.food.name}
                key={idx}
                eventKey={idx}
                ><FoodLogTable data={item.food}/></Panel>
    })

    return (
      <Accordion>
        {rows}
      </Accordion>
    )
  }
}

export default FoodLogList;
