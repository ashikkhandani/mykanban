import React, { Component } from "react";

export default class testingItem extends Component {
  render() {
    const { item, onStatusChange3 } = this.props;
    return (
      <div className="my-3" onClick={() => onStatusChange3(item.id)}>
        {<p className="testingP">{item.task} </p>}
      </div>
    );
  }
}
