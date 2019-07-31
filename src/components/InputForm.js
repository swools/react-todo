import React from "react";

const InputForm = props => {
 return (
    <form className="todoInput" onSubmit={props.addItem} >
        <input
            className="input"
            type="text"
            onChange={props.handleChange}
            value={props.value.text}
            placeholder="Task"
        />
        <button type="submit" name="submit" value="submit">Add Task</button>
    </form>
 )
}

export default InputForm