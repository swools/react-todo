import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              value={this.props.value.text}
              onChange={this.props.handleChange}
            />

            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoList;
