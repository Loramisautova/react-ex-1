import React from "react";
import PropTypes from "prop-types";

// import TextList from "./TextList";

export class TextPanel extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleSubmit = () => {
    this.props.onChange(this.state.text);
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

TextPanel.propTypes = {
  onChange: PropTypes.func.isRequired
};
