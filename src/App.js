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
      done: 1,
    };
    // Add newItem in myList with setState method
    this.setState({
      myList: [...this.state.myList, newItem],
    });
    console.log(this.state.myList);
  }

  // 1st Update List function
  updateMyList1(newArrayId) {
    const newList = this.state.myList.map((myArray) => {
      if (myArray.id === newArrayId) {
        myArray.done = 2;
        return myArray;
      } else return myArray;
    });
    // Add newList in myList with setState method
    this.setState({ newList });
  }
  // 2nd update list function
  updateMyList2(newArrayId) {
    const newList = this.state.myList.map((myArray) => {
      if (myArray.id === newArrayId) {
        myArray.done = 3;
        return myArray;
      } else return myArray;
    });
    // Add newList in myList with setState method
    this.setState({ newList });
  }
  // 3rd update list function
  updateMyList3(newArrayId) {
    const newList = this.state.myList.map((myArray) => {
      if (myArray.id === newArrayId) {
        myArray.done = 4;
        return myArray;
      } else return myArray;
    });
    // Add newList in myList with setState method
    this.setState({ newList });
  }
  // 4th update list function
  updateMyList4(newArrayId) {
    const newList = this.state.myList.map((myArray) => {
      if (myArray.id === newArrayId) {
        myArray.done = 5;
        return myArray;
      } else return myArray;
    });
    // Add newList in myList with setState method
    this.setState({ newList });
  }

  render() {
    const doTask = this.state.myList.filter((el) => el.done === 1);
    const waitingTask = this.state.myList.filter((el) => el.done === 2);
    const testingTask = this.state.myList.filter((el) => el.done === 3);
    const doneTask = this.state.myList.filter((el) => el.done === 4);

    return (
      <div className="app">
        {/* ********** My Title ****************/}
        <h1 className="title py-2 sticky-top">My Kanban Board </h1>

        {/************ Add Form ****************/}
        <AddForm addItemToDo={this.addItem.bind(this)} />

        {/***********  All Components ***********/}
        <div className="board row justify-content-around">
          {/* --------------------------------- */}

          <ToDo toDo={doTask} handleChange1={this.updateMyList1.bind(this)} />
          {/* ------------------------------------ */}

          <Waiting
            toWait={waitingTask}
            handleChange2={this.updateMyList2.bind(this)}
          />
          {/* ------------------------------------ */}

          <Testing
            toTest={testingTask}
            handleChange3={this.updateMyList3.bind(this)}
          />
          {/* -------------------------------------- */}

          <Done
            toDone={doneTask}
            handleChange4={this.updateMyList4.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
