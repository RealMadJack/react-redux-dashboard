import React, { Component } from 'react'

class THEAD extends Component {
  render() {
    const { title } = this.props

    const STRING_DATA = title.map((key, i) => {
      return(
        <th key={i}>{key}</th>
      )
    })

    return(
      <thead>
        <tr>
          {STRING_DATA}
        </tr>
      </thead>
    );

  }
}

export default THEAD;
