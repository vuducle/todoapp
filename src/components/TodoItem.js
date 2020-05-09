import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyles = () => {
    /*if (this.props.todo.completed) {
      return {
        "text-decoration": "line-through",
      };
    } else {
      return {
        "text-decoration": "none",
      };*/
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyles()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
} /* {backgroundColor: 'f4f4f4' }*/
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  float: "right",
};

/*const itemStyle = {
  backgroundColor: "f4f4f4",
};*/

export default TodoItem;
