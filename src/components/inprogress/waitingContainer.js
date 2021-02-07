import React, { Component } from "react";
import WaitingItem from "./waitingItem";
export default class waitingContainer extends Component {
  render() {
    const { toWait, handleChange2 } = this.props;
    return (
      <div className="waiting">
        <h4 className="py-sm-1 py-md-2 py-lg-3 bg-danger">Waiting/ Bugs</h4>
        {/* map method */}
        {toWait.map((el) => {
          return (
            <WaitingItem
              key={el.id}
              item={el}
              onStatusChange2={handleChange2}
            />
          );
        })}
      </div>
    );
  }
}
