'use strict';

import React, {Component} from 'react';

class StatusBar extends Component {
  render() {
    return (
      <div>
        <p className="App-title">{this.props.title}</p>
      </div>
    );
  }
}

export default StatusBar;
