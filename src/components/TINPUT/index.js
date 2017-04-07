// Dev dependencies
import React, { Component } from 'react'

// Components
import StyledButton from '../../components/Button/StyledButton'

class TINPUT extends Component {
  render() {
    const TINPUT_DATA = [{
        type: 'text',
        name: 'title',
        value: this.state.title,
        placeholder: 'title',
        onChange: this.handleChange,
      },
      {
        type: 'text',
        name: 'name',
        value: this.state.name,
        placeholder: 'name',
        onChange: this.handleChange,
      },
      {
        type: 'text',
        name: 'surname',
        value: this.state.surname,
        placeholder: 'surname',
        onChange: this.handleChange,
      },
      {
        type: 'text',
        name: 'company',
        value: this.state.company,
        placeholder: 'company',
        onChange: this.handleChange,
      },
      {
        type: 'text',
        name: 'country',
        value: this.state.country,
        placeholder: 'country',
        onChange: this.handleChange,
      }]

    const { type, name, value, placeholder, change } = this.props

    return(
      <td>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={change} />
      </td>
    );
  }
}

export default TINPUT
