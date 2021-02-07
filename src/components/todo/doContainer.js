import React, { Component } from "react";
import DoItem from "./doItem";
export default class doContainer extends Component {
  render() {
    const { toDo, handleChange1 } = this.props;

    return (
      <div className="toDo">
        <h4 className="bg-primary py-2">To Do</h4>
        {toDo.map((el) => {
          return (
            <DoItem key={el.id} item={el} onStatusChange1={handleChange1} />
          );
        })}
      </div>
    );
  }
}
