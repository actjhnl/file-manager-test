import React, { Component } from 'react';
import { Panel, CardsList } from './';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{padding:'10px',boxShadow:'0px 1px 6px #071F53'}}>
          <h2>File manager</h2>
        </div>
        <Panel />
        <CardsList />
      </div>
    );
  }
}

export default App;
