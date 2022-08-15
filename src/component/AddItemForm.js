import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export default class AddItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        show: false
    }
}

handleClose = () => {
    this.setState({
        show: false
    })
}
handleShow = () => {
    this.setState({
        show: true
    })
}


  render() {
    return (
      <>
   <div>

    <Button variant="primary" onClick={this.handleShow} > Add Item </Button>

                <Modal show={this.state.show} onHide={this.handleClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>Enter Product Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.submitHandler}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder= "Enter Title" autoFocus id ="itemTitle"/>

                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} id ="itemdes" placeholder="Enter Description"/>
                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Image imgURL</Form.Label>
                                <Form.Control type="text" placeholder= "Enter Image URL" autoFocus  id ="itemImg"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder= "Enter Price" autoFocus  id ="itemPrice" />
                            </Form.Group>

                            <Modal.Footer>
                                
                                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                <Button type='submit' variant="primary" onClick={this.handleClose}>Save Changes</Button>
                            </Modal.Footer>
                            
                        </Form>
                    </Modal.Body>

                </Modal>




  </div>
      {/* <form onSubmit={this.props.submitHandler}>
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
      </form> */}
      </>
    );
  }
}
