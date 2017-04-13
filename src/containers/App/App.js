// Dev dependencies
import React, { Component } from 'react';

// Components
import H1 from '../../components/H1/index'
import Table from '../Table/Table'

class App extends Component {
  render() {

    return (
      <div className="container">
        <div className="row">
          <H1 className="pink-text text-accent-3">Dashboard built with React-Redux + Materialize</H1>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
