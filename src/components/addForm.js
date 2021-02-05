import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
export default class addForm extends Component {
  /******* Constructor State    **** */
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  // New Item function
  newToDoItemChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  // Item submit function
  itemSubmit(e) {
    e.preventDefault();

    this.props.addItemToDo(this.state.value);
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <div className="row justify-content-center mb-3">
        <Form
          inline
          className="col-sm-12 col-md-5 col-lg-4 text-align-center"
          onSubmit={this.itemSubmit.bind(this)}
        >
          <FormControl
            type="text"
            placeholder="Enter your tasks . . ."
            className="formC my-sm-2 mr-sm-3 mb-2 col-sm-6 col-md-10 col-lg-8"
            value={this.state.value}
            onChange={this.newToDoItemChange.bind(this)}
          />

          <Button
            className="btn bg-dark col-sm-3 col-md-5 col-lg-3 my-sm-2 ml-sm-2 ml-md-5 ml-lg-2 mt-sm-2"
            type="submit"
            value="Add"
          >
            TO DO
          </Button>
        </Form>
      </div>
    );
  }
}
