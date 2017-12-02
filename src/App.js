import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButton from './ActionButton';
import StatusBar from './StatusBar';
import ListItem from './ListItem';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    firebase.database().ref('items').on('child_added', snapshot => {
      this.setState({
        items: this.state.items.concat(snapshot.val()),
      });
    });
  }

  renderItems() {
    return(
      <div>
        {
          this.state.items.map(item => (
            <div>
              <span>{item.title}</span>
            </div>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>

          <StatusBar title="Grocery List" />

          <ActionButton onPress={() => {}} title="Add" />

          <p> {this.renderItems()} </p>

        </div>
      </div>
    );
  }
}

export default App;
