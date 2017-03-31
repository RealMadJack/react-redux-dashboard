import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    const data = this.props.data

    const TH = ['Title', 'Name', 'Surname', 'Position', 'Country', 'Birth Date'].map((key, i) => <th key={i}>{key}</th>)

    const TD = data.map((key, i) => {
      return(
        <tr key={key.index}>
          <td>{key.title}</td>
          <td>{key.name}</td>
          <td>{key.surname}</td>
          <td>{key.company}</td>
          <td>{key.country}</td>
          <td>{key.registered}</td>
        </tr>
      )
    })

    return(
      <table className="responsive-table highlight">
        <thead>
          <tr>
            {TH}
          </tr>
        </thead>
        <tbody>
          {TD}
        </tbody>
      </table>
    );
  }
}
