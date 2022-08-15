import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import EditItemModal from "./EditItem";
import Button from "react-bootstrap/Button";
export default class ProductCard extends Component {


  render() {
    return (
      <>
       

        <Row xs={1} md={4} className="g-4">
          {this.props.itemData.map((item, idx) => (
            <div key={idx}>
              
              <Card style={{ width: "18rem", padding: 10 }}>
                <Card.Img src={item.imgURL} width="200" />
                <Card.Body>

                  <Card.Title style={{ color: "black" }}>{item.title}</Card.Title>
                  <Card.Text style={{ color: "black" }}>{item.description}</Card.Text>
                  <Card.Text style={{ color: "black" }}>{item.price} JD</Card.Text>

                  <EditItemModal allData={item} getProduct={this.props.getProduct}/>

                  <Button onClick={() => this.props.deleteProduct(item._id)}>Delete</Button>

                </Card.Body>
              </Card>

            </div>
          ))}
        </Row>
      </>
    );
  }
}



