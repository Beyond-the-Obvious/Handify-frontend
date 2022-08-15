import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import axios from "axios";

export default class ProductCardHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
        favClickCounter: this.props.itemData.likes,
    }
}

favClick = () => {

  this.setState({ 
    favClickCounter: this.state.favClickCounter + 1 
  });
  
  const id = this.props.itemData._id;
  const data = {
    likes: this.state.favClickCounter,
  };
  axios.put(`${process.env.REACT_APP_HEROKU}/item/${id}`, { data });
  // this.props.getProduct();
}


  render() {
    return (
      <>
              <Card style={{ width: "18rem", padding: 10 }}>
                <Card.Img src={this.props.itemData.imgURL} width="200" />
                <Card.Body>

                  <Card.Title style={{ color: "black" }}>{this.props.itemData.title}</Card.Title>
                  <Card.Text style={{ color: "black" }}>{this.props.itemData.description}</Card.Text>
                  <Card.Text style={{ color: "black" }}>{this.props.itemData.price} JD</Card.Text>
                  <Button  onClick={this.favClick} ><span>👍{this.state.favClickCounter}</span></Button>
                  <Button>Add to Cart</Button>

                </Card.Body>
              </Card>
      </>
    );
  }
}



