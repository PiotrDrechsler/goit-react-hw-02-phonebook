import { Component } from 'react';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  acceptTC: false,
  gender: '',
  favoriteAnimal: '',
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
            <span> Accept T & C </span>
          </label>
          <section>
            <label>
              <input
                name="gender"
                type="radio"
                checked={this.state.gender === 'Male'}
                value="Male"
                onChange={this.handleInputChange}
              />
              <span>Male</span>
            </label>
            <label>
              <input
                name="gender"
                type="radio"
                checked={this.state.gender === 'Feamle'}
                value="Feamle"
                onChange={this.handleInputChange}
              />
              <span>Feamle</span>
            </label>
            <label>
              <input
                name="gender"
                type="radio"
                checked={this.state.gender === 'Non-binary'}
                value="Non-binary"
                onChange={this.handleInputChange}
              />
              <span>Non-binary</span>
            </label>
          </section>

          <h3>Your favorite animal</h3>
          <select
            name="favoriteAnimal"
            value={this.state.favoriteAnimal}
            onChange={this.handleInputChange}
          >
            <option value="">Choose...</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="snake">Snake</option>
            <option value="bee">Bee</option>
          </select>
          <button type="submit">SUBMIT</button>
          <button type="button" onClick={this.resetForm}>
            RESET
          </button>
        </form>
      </>
    );
  }
}
