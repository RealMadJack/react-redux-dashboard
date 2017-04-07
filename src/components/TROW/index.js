import React, { Component } from 'react'

import StyledButton from '../../components/Button/StyledButton'

class TROW extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { del, edit, editing, save, id, index, title, name, surname, company, country, registered } = this.props;
    console.log(this.props)

    if ( editing ) {
      return(
        <tr>
          <td><input
            type="text"
            value={title} /></td>
          <td><input
            type="text"
            value={name} /></td>
          <td><input
            type="text"
            value={surname} /></td>
          <td><input
            type="text"
            value={company} /></td>
          <td><input
            type="text"
            value={country} /></td>
          <td><input
            type="text"
            value={registered} /></td>
          <td className="center-align">
            <StyledButton
                title="Save"
                onClick={save}>
              <i className="tiny material-icons">
                done_all
              </i>
            </StyledButton>
            <StyledButton
                title="Delete"
                onClick={del}>
              <i className="tiny material-icons">
                delete
              </i>
            </StyledButton>
          </td>
        </tr>
      );
    } else if ( !editing ) {
      return(
        <tr>
          <td>{title}</td>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{company}</td>
          <td>{country}</td>
          <td>{registered}</td>
          <td className="center-align">
            <StyledButton
                title="Edit"
                onClick={edit}>
              <i className="tiny material-icons">
                mode_edit
              </i>
            </StyledButton>
            <StyledButton
                title="Delete"
                onClick={del}>
              <i className="tiny material-icons">
                delete
              </i>
            </StyledButton>
          </td>
        </tr>
      );
    }

  }
}

export default TROW
