import React from "react";
import ToDoItems from './ToDoItems'

const ToDoList = props => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <ToDoItems
            key={index}
            item={item.name}
          />
        ))}
      </ul>
    );
}

export default ToDoList;
