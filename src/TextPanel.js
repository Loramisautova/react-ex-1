import React from "react";

export class TextPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
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
        <div>Comp. text: {this.state.text}</div>
      </div>
    );
  }
}
