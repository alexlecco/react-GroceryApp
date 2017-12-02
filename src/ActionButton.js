'use strict';

import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class ActionButton extends Component {
  render() {
    return (
      <div>
        <Button
          onPress={this.props.onPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        >
          {this.props.title}
        </Button>
      </div>
    );
  }
}

export default ActionButton;
