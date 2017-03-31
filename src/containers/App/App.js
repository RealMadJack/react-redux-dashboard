import React, { Component } from 'react';

import Container from '../../components//Container/index'
import H1 from '../../components/H1/index'
import Row from '../../components/Row/index'

class App extends Component {
  render() {
    const TH = ['Title', 'Name', 'Surname', 'Position', 'Country', 'Birth Date'].map((key, i) => <th key={i}>{key}</th>)
    // const TD = USERS_DATA.map((key, i) => {
    //   return(
    //     <tr key={key.index}>
    //       <td>{key.title}</td>
    //       <td>{key.name}</td>
    //       <td>{key.surname}</td>
    //       <td>{key.company}</td>
    //       <td>{key.country}</td>
    //       <td>{key.registered}</td>
    //     </tr>
    //   )
    // })

    return (
      <Container className="container">
        <Row className="row">
          <H1 className="pink-text text-accent-3">Dashboard built with React-Redux + Materialize</H1>
          <table className="responsive-table highlight">
            <thead>
              <tr>
                {TH}
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </Row>
      </Container>
    );
  }
}

export default App;
