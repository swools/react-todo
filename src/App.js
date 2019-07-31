import React from "react";
// import ToDoList from "./components/ToDoList.js";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { text: "", key: "" },
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: { text: e.target.value, key: Date.now() } });
  }

  addItem(e) {
    if (this.state.value.text == '') {
      e.preventDefault();
      return
    } else {
      this.setState({
        items: this.state.items.concat(this.state.value),
        value: {text: "", key: ""}
      });
  
      e.preventDefault();
    }

  }

  render() {
    return (
      <div>
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input
                placeholder="Task"
                value={this.state.value.text}
                onChange={this.handleChange}
              />
              <ToDoItems entries={this.state.items} className="entries" />
              <button type="submit"> Add Task </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
