// Dev dependencies
import React, { Component } from 'react';

// Components
import Container from '../../components//Container/index'
import H1 from '../../components/H1/index'
import Row from '../../components/Row/index'
import Table from '../Table/Table'

class App extends Component {
  render() {

    return (
      <Container className="container">
        <Row className="row">
          <H1 className="pink-text text-accent-3">Dashboard built with React-Redux + Materialize</H1>
          <Table />
        </Row>
      </Container>
    );
  }
}

export default App;
