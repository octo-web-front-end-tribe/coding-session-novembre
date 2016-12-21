import React, { Component } from 'react';

class SimpleInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.id, event.target.value);
    }
  }

  render() {
    return (
      <input id={this.props.id} onChange={this.handleChange} />
    );
  }
}

SimpleInput.propTypes = {
  id: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

module.exports = SimpleInput;
