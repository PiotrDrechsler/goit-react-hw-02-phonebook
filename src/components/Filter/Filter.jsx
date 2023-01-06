import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = { filter: '' };

  handleFilterInput = event => {
    const { filter, value } = event.target;
    this.setState({
      [filter]: value,
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterInput}
          placeholder="Enter name"
        />
        {console.log(this.value)}
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
};
