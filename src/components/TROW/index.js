import React, { Component } from 'react'

import StyledButton from '../../components/Button/StyledButton'

class TROW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      title: props.title,
      name: props.name,
      surname: props.surname,
      company: props.company,
      country: props.country,
      registered: props.registered,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { editing, onDel, onEdit, onSave } = this.props;

    if ( editing ) {
      return(
        <tr>
          <td>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange} />
          </td>
          <td>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </td>
          <td>
            <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange} />
          </td>
          <td>
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange} />
          </td>
          <td>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange} />
          </td>
          <td>
            <input
              type="text"
              name="registered"
              value={this.state.registered}
              onChange={this.handleChange} />
          </td>
          <td className="center-align">
            <StyledButton
                className="active"
                title="Save"
                onClick={onSave.bind(this, this.state)}>
              <i className="tiny material-icons">
                done_all
              </i>
            </StyledButton>
            <StyledButton
                title="Delete"
                onClick={onDel}>
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
          <td>{this.state.title}</td>
          <td>{this.state.name}</td>
          <td>{this.state.surname}</td>
          <td>{this.state.company}</td>
          <td>{this.state.country}</td>
          <td>{this.state.registered}</td>
          <td className="center-align">
            <StyledButton
                title="Edit"
                onClick={onEdit}>
              <i className="tiny material-icons">
                mode_edit
              </i>
            </StyledButton>
            <StyledButton
                title="Delete"
                onClick={onDel}>
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
