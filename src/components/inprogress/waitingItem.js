import React, { Component } from "react";

export default class waitingItem extends Component {
  render() {
    const { item, onStatusChange2 } = this.props;
    return (
      <div onClick={() => onStatusChange2(item.id)}>
        {<p className="waitingP">{item.task} </p>}
      </div>
    );
  }
}
