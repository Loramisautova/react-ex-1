import React from "react";
import PropTypes from "prop-types";

export class TextList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

TextList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};
