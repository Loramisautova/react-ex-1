import React from "react";
import { TextPanel } from "./TextPanel";

export class ShowText extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleTextChange = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <div>
        <TextPanel onChange={this.handleTextChange} />
        <div>Show Text: {this.state.text}</div>
      </div>
    );
  }
}
