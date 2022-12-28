import { Component } from 'react';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  acceptTC: false,
};

export class MyForm extends Component {
  state = INITIAL_STATE;

  handleSubmit = event => {
    event.preventDefault();
    this.props.formSubmissionHandler(this.state);
    this.resetForm();
  };

  handleInputChange = event => {
    const { value, name, checked, type } = event.target;

    this.setState({
      [name]: type !== 'checkbox' ? value : checked,
    });
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <>
        <h1>{this.props.label}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label>
            <input
              type="checkbox"
              name="acceptTC"
              checked={this.state.acceptTC}
              onChange={this.handleInputChange}
            />
            <span> Active</span>
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </>
    );
  }
}
