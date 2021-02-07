import React, { Component } from "react";

export default class doItem extends Component {
  render() {
    const { item, onStatusChange1 } = this.props;
    return (
      <div className="my-3" onClick={() => onStatusChange1(item.id)}>
        {<p className="doP ">{item.task} </p>}
      </div>
    );
  }
}
