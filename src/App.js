import React from "react";
// import ToDoList from "./components/ToDoList.js";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { text: "", key: "" },
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange(e) {
    this.setState({ value: { text: e.target.value, key: Date.now() } });
  }

  addItem(e) {
    if (this.state.value.text === '') {
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

  removeItem() {
    console.log("CLICKED");
  }

  //Need to add a removeItem function

  render() {
    return (
      <div className="wrapper">
        <ToDoList 
          onChange={this.handleChange} 
          onSubmit={this.addItem} 
          value={this.state.value.text}  
        />
      </div>
    );
  }
}

export default App;
