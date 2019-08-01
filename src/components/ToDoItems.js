import React from "react";

const ToDoItems = props =>  {

    return (
    <li 
      className="todo_list-item"
      onClick={ () => {props.removeItem(props.itemIndex)}}
    >
      {props.item}
    </li>
  );
};

export default ToDoItems;
