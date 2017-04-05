// Dev dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import StyledButton from '../../components/Button/StyledButton'

// Actions
import { fetchUsers, addUser, deleteUser, editUser } from '../../actions/userActions'

class Table extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      name: '',
      surname: '',
      company: '',
      country: '',
      registered: Date.now(),
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    this.fetchUsers()
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  fetchUsers() {
    this.props.dispatch(fetchUsers())
  }

  addUser() {
    this.props.dispatch(addUser(this.state))
  }

  cleanInput() {
    this.setState({
      title: '',
      name: '',
      surname: '',
      company: '',
      country: '',
    })
  }

  deleteUser(id) {
    this.props.dispatch(deleteUser(id))
  }

  editUser(id) {
    this.props.dispatch(editUser(id))
  }

  render() {
    const { users } = this.props

    const TH = ['Title', 'Name', 'Surname', 'Company', 'Country', 'Birth Date'].map((key, i) => <th key={i}>{key}</th>)

    const TD = users.map((key, i) => {
      return(
        <tr key={key.index}>
          <td>{key.title}</td>
          <td>{key.name}</td>
          <td>{key.surname}</td>
          <td>{key.company}</td>
          <td>{key.country}</td>
          <td>{key.registered}</td>
          <td className="center-align">
            <StyledButton
                title="Edit"
                onClick={this.editUser.bind(this, key.id)}>
              <i className="tiny material-icons">
                mode_edit
              </i>
            </StyledButton>
            <StyledButton
                title="Delete"
                onClick={this.deleteUser.bind(this, key.id)}>
              <i className="tiny material-icons">
                delete
              </i>
            </StyledButton>
          </td>
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
          <tr>
            <td>
              <input
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Title"
                onChange={this.handleChange} />
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
                onChange={this.handleChange} />
            </td>
            <td>
              <input
                type="text"
                name="surname"
                value={this.state.surname}
                placeholder="Surname"
                onChange={this.handleChange} />
            </td>
            <td>
              <input
                type="text"
                name="company"
                value={this.state.company}
                placeholder="Company"
                onChange={this.handleChange} />
            </td>
            <td>
              <input
                type="text"
                name="country"
                value={this.state.country}
                placeholder="Country"
                onChange={this.handleChange} />
            </td>
            <td>
            </td>
            <td className="center-align">
              <StyledButton
                  title="Add"
                  onClick={this.addUser.bind(this)}>
                <i className="tiny material-icons">
                  done
                </i>
              </StyledButton>
              <StyledButton
                  title="Clean"
                  onClick={this.cleanInput.bind(this)}>
                <i className="tiny material-icons">
                  settings_backup_restore
                </i>
              </StyledButton>
            </td>
          </tr>
          {TD}
        </tbody>
      </table>
    );
  }
}

function mapStoreToProps(store) {
  return {
    users: store.usersState.users,
  }
}

export default connect(mapStoreToProps)(Table);
