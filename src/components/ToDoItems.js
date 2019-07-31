import React from "react";

class ToDoItems extends React.Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }
  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default ToDoItems;
