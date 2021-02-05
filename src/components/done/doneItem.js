import React, { Component } from "react";

export default class doneItem extends Component {
  render() {
    const { item4, onStatusChange4 } = this.props;

    return (
      <div onClick={() => onStatusChange4(item4.id)}>
        {<p className="doneP">{item4.task} </p>}
      </div>
    );
  }
}
