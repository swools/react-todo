import React from "react";

const ToDoItems = props =>  {
  const toDoEntries = props.entries;
  const listItems = toDoEntries.map(function(item) {
    return <li key={item.key} className="todo_list-item" >{item.text}</li>;
  });
  console.log(listItems);
}

export default ToDoItems;
