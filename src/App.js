import React from "react";
// import ToDoList from "./components/ToDoList.js";
import "./App.css";
import ToDoList from "./components/ToDoList";
import InputForm from "./components/InputForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { text: "", key: "" },
      list: []
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
      e.preventDefault();
      this.setState({
        list: this.state.list.concat(this.state.value),
        value: {text: "", key: ""}
      });
     
  
      
    }
  }

  removeItem() {
    console.log("CLICKED");
  }

  //Need to add a removeItem function

  render() {
    return (
      <div className="wrapper">
        <InputForm 
          handleChange={this.handleChange} 
          addItem={this.addItem} 
          value={this.state.value.text}  
        />
        <ToDoList list={this.state.list} value={this.state.value.text}/>
      </div>
    );
  }
}

export default App;
