import React from "react";
import ToDoItems from './ToDoItems'

const ToDoList = props => {
    return (
      <ul className="todo_list">
        {props.list.map((item, index) => (
          <ToDoItems
            key={index}
            item={item}
            itemIndex={index}
            removeItem={props.removeItem}
          />
        ))}
      </ul>
    );
}

export default ToDoList;
