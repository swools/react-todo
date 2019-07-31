import React from "react";
import ToDoItems from './ToDoItems'

const ToDoList = props => {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={props.addItem}>
            <input
              placeholder="Task"
              value={props.value.text}
              onChange={props.handleChange}
            />
            <ToDoItems entries={this.props.items}/>
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
}

export default ToDoList;
