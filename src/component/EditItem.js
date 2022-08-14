import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default class EditItemModal extends Component {

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
                <Button variant="primary" onClick={this.handleShow} > Edit Item </Button>

                <Modal show={this.state.show} onHide={this.handleClose} >

                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.allData.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.editHandler}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder={this.props.allData.title} autoFocus controlId="itemTitle"/>

                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} controlId="itemDescription" placeholder={this.props.allData.description}/>
                            </Form.Group>

                            <Form.Group className="mb-3"  >
                                <Form.Label>Image imgURL</Form.Label>
                                <Form.Control type="text" placeholder={this.props.allData.imgURL} autoFocus  controlId="itemImgURL"/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder={this.props.allData.price} autoFocus  controlId="itemPrice" />
                            </Form.Group>

                            <Modal.Footer>
                                
                                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                                <Button type='submit' variant="primary" onClick={this.handleClose}>Save Changes</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        );

    }
}