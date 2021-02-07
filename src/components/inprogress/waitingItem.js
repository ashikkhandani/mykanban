import React, { Component } from "react";

export default class waitingItem extends Component {
  render() {
    const { item, onStatusChange2 } = this.props;
    return (
      <div className="my-3" onClick={() => onStatusChange2(item.id)}>
        {<p className="waitingP col-12">{item.task} </p>}
      </div>
    );
  }
}
