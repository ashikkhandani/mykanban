import React, { Component } from "react";
import WaitingItem from "./waitingItem";
export default class waitingContainer extends Component {
  render() {
    const { toWait, handleChange2 } = this.props;
    return (
      <div className="waiting">
        <h4 className="bg-danger py-2">Waiting</h4>
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
