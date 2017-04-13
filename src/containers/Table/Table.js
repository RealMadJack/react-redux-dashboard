// Dev dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import StyledButton from '../../components/Button/StyledButton'
import LoadingIndicator from '../../components/LoadingIndicator/index'
import ErrorMessage from '../../components/ErrorMessage/index'

import THEAD from '../../components/THEAD/index'
import TROW from '../../components/TROW/index'

// Actions
import { fetchUsers, addUser, deleteUser, editUser, saveUser } from '../../actions/userActions'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: Date.now(),
      registered: Date.now(),
      title: '',
      name: '',
      surname: '',
      company: '',
      country: '',
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
    this.setState({
      id: Date.now(),
      registered: Date.now(),
    })

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

  saveUser(id) {
    this.props.dispatch(saveUser(id))
  }

  render() {
    const { users, fetching, fetched, editing, userID } = this.props

    const theadData = ['Title', 'Name', 'Surname', 'Company', 'Country', 'Birth Date']

    const TROW_INPUT =
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

    const TROW_LIST = users.map((key, i) => {
      if (userID === key.id) {
        return(
          <TROW
            key={key.id}
            editing={editing}
            onDel={this.deleteUser.bind(this, key.id)}
            onEdit={this.editUser.bind(this, key.id)}
            onSave={this.saveUser.bind(this)}
            {...key} />
        );
      } else {
        return(
          <TROW
            key={key.id}
            editing={false}
            onDel={this.deleteUser.bind(this, key.id)}
            onEdit={this.editUser.bind(this, key.id)}
            onSave={this.saveUser.bind(this)}
            {...key} />
        );
      }
    })


    if (fetching && !fetched) {
      return(
        <div>
          <table className="responsive-table highlight">
            <THEAD title={theadData} />
          </table>
          <LoadingIndicator />
        </div>
      );
    } else if (fetched && !fetching) {
      return(
        <div>
          <table className="responsive-table highlight">
            <THEAD title={theadData} />
            <tbody>
              {TROW_INPUT}
              {TROW_LIST}
            </tbody>
          </table>
          <StyledButton>
            5
          </StyledButton>
          <StyledButton>
            8
          </StyledButton>
        </div>
      );
    } else if (!fetching && !fetched) {
      return(
        <div>
          <table className="responsive-table highlight">
            <THEAD title={theadData} />
          </table>
          <ErrorMessage>Data is corrupted</ErrorMessage>
        </div>
      );
    }

  }
}

function mapStoreToProps(store) {
  return {
    editing: store.usersState.editing,
    fetching: store.usersState.fetching,
    fetched: store.usersState.fetched,
    userID: store.usersState.userID,
    users: store.usersState.users,
  }
}

export default connect(mapStoreToProps)(Table);
