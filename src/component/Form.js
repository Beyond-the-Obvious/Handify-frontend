import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <label htmlFor="">item title</label>
        <input type="text" id="itemTitle" />
        <br />
        <label htmlFor="">item description</label>
        <input type="text" name="" id="itemdes" />
        <br />
        <label htmlFor="">item price</label>
        <input type="text" id="itemPrice" />
        <br />
        <label htmlFor="">item img</label>
        <input type="text" id="itemImg" />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}
