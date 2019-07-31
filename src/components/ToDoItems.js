import React from "react";

class ToDoItems extends React.Component {
  createTasks(item) {
    return <li key={item.key} className="todo_list-item" >{item.text}</li>;
  }


  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTasks);
    console.log(this)
    return <ul className="todo_list">{listItems}</ul>;
  }
}

export default ToDoItems;
