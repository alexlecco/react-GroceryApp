'use strict';

import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class ListItem extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <div>
          {this.props.item.title}
        </div>
      </Button>
    );
  }
}

export default ListItem;
