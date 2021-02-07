import React, { Component } from "react";
import DoneItem from "./doneItem";
export default class doneContainer extends Component {
  render() {
    const { toDone, handleChange4 } = this.props;
    return (
      <div className="done">
        <h4 className=" py-2" style={{ backgroundColor: "rgb(25, 224, 25)" }}>
          Done
        </h4>
        {/* map method */}
        {toDone.map((el) => {
          return (
            <DoneItem key={el.id} item4={el} onStatusChange4={handleChange4} />
          );
        })}
      </div>
    );
  }
}
