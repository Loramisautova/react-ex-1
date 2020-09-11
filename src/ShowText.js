import React from "react";

import { TextPanel } from "./TextPanel";
import { TextList } from "./TextList";

export class ShowText extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  handleTextChange = (text) => {
    this.setState((prevState) => {
      return {
        list: [
          ...prevState.list,
          {
            text,
            id: Date.now()
          }
        ]
      };
    });
  };

  render() {
    return (
      <div>
        <TextPanel onChange={this.handleTextChange} />
        <TextList list={this.state.list} />
      </div>
    );
  }
}