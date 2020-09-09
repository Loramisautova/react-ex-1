import React from "react";
import PropTypes from "prop-types";

import { TextPanel } from "./TextPanel";

export class TextList extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }

  handleTextChange = (text) => {
    const newList = {
        text, 
        id: Date.now()
    };
    this.setState(prevState => ({
        list: prevState.list.concat(newList),
        text: ''
    })) 
  };

  render() {
    return (
      <div>
        <TextPanel onChange={this.handleTextChange} />
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

TextList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ).isRequired
};
