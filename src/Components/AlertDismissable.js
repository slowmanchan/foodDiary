import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';


class AlertDismissable extends Component {
  render() {
    return (
      <Alert bsStyle='success'>
        <strong>Food added successfully! </strong>keep it up!?
      </Alert>
    );
  }
}

export default AlertDismissable;
