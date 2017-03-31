// Dev dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Components
import Container from '../../components//Container/index'
import H1 from '../../components/H1/index'
import Row from '../../components/Row/index'
import Table from '../Table/Table'

//Actions
import { fetchUsers } from '../../actions/userActions'

class App extends Component {

  componentWillMount() {
    this.fetchUsers()
  }

  fetchUsers() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props;

    return (
      <Container className="container">
        <Row className="row">
          <H1 className="pink-text text-accent-3">Dashboard built with React-Redux + Materialize</H1>
          <Table data={users} />
        </Row>
      </Container>
    );
  }
}

function mapStoreToProps(store) {
  return {
    users: store.usersState.users,
  }
}

export default connect(mapStoreToProps)(App);
