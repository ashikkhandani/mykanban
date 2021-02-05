import React, { Component } from "react";
import "./App.css";
import AddForm from "./components/addForm";
import ToDo from "./components/todo/doContainer";
import Waiting from "./components/inprogress/waitingContainer";
import Testing from "./components/testing/testingContainer";
import Done from "./components/done/doneContainer";

export class App extends Component {
  /******* Constructor State ******** */
  constructor(props) {
    super(props);
    this.state = {
      myList: [],
    };
  }

  // Add to do items function with C.Method.
  addItem(value) {
    const newItem = {
      id: this.state.myList.length + 1,
      task: value,
      done: false,
    };
    // Add newItem in myList with setState method
    this.setState({
      myList: [...this.state.myList, newItem],
    });
    console.log(this.state.myList);
  }

  // Update List function
  updateMyList(newArrayId) {
    let newList = this.state.myList.map((myArray) => {
      if (myArray.id === newArrayId) {
        myArray.done = !myArray.done;
        return myArray;
      } else return myArray;
    });

    // Add newList in myList with setState method
    this.setState({
      myList: newList,
    });
  }
  render() {
    const doTask = this.state.myList.filter((e1) => !e1.done);
    const waitingTask = this.state.myList.filter((e2) => e2.done);
    const testingTask = this.state.myList.filter((e3) => e3.done);
    const doneTask = this.state.myList.filter((e4) => e4.done);

    return (
      <div className="app">
        {/*  My Title */}
        <div>
          <h1 className="title py-sm-2 py-md-3">My Kanban Board </h1>
        </div>
        {/* Add Form */}
        <AddForm addItemToDo={this.addItem.bind(this)} />
        {/*All Components */}
        <div className="board row justify-content-around">
          <ToDo toDo={doTask} handleChange1={this.updateMyList.bind(this)} />
          <Waiting
            toWait={waitingTask}
            handleChange2={this.updateMyList.bind(this)}
          />
          <Testing
            toTest={testingTask}
            handleChange3={this.updateMyList.bind(this)}
          />
          <Done
            toDone={doneTask}
            handleChange4={this.updateMyList.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
