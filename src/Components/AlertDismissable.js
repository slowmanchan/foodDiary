import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';


class AlertDismissable extends Component {
  render() {
    return (
      <Alert bsStyle={this.props.bsStyle}>
        <strong>{this.props.message}</strong>
      </Alert>
    );
  }
}

export default AlertDismissable;
