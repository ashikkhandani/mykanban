import React, { Component } from "react";
import TestingItem from "./testingItem";
export default class testingContainer extends Component {
  render() {
    const { toTest, handleChange3 } = this.props;
    return (
      <div className="testing">
        <h4 className="bg-warning py-2">Testing</h4>
        {/* map method */}
        {toTest.map((el) => {
          return (
            <TestingItem
              key={el.id}
              item={el}
              onStatusChange3={handleChange3}
            />
          );
        })}
      </div>
    );
  }
}
