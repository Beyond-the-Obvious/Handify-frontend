import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome to Book App</h1>
        <ul>
          {this.props.itemData.map((item, idx) => (
            <li key={idx}>
              {item.title}
              {item.description}
              {item.price}
              {item.imgURL}
              <button onClick={() => this.props.deleteHandeMade(item._id)}>
                delete
              </button>
              <a href="">update</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
