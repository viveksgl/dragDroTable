import React from 'react';

import './App.css';
import DragDrop from './DragDrop'

class App extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Drag and drop a table with some data </h1>
        <DragDrop />
       
       
        
      </div>
    );
  }
}

export default App;
