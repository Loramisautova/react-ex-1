import React from "react";

import PropTypes from "prop-types";

export class TextPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.onChange(this.state.text);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

TextPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
}
