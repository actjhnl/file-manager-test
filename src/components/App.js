import React, { Component } from 'react';
import { Panel, CardsList } from './';
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>File manager</h1>
        </div>
        <Panel />
        <CardsList />
      </div>
    );
  }
}

export default App;
