import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import swal from 'sweetalert';

class Contact extends Component {

    // adding swal to show success message on submitting form
    onClick = (e) => {
        e.preventDefault();
        swal("Success!", "Your message has been sent!", "success");
    }

    render() {
        return (
            <>
              <Form>

                <Row className="mb-3">
                 <Col>
                   <Form.Label>First name</Form.Label>
                   <Form.Control  />
                 </Col>

                 <Col>
                   <Form.Label>Last name</Form.Label>
                   <Form.Control  />
                 </Col>
                 </Row>

                <Row className="mb-3">
                   <Form.Group as={Col} controlId="formGridEmail">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email"  />
                   </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1" >
                 <Form.Label>Message</Form.Label>
                 <Form.Control as="textarea" rows={3}/>
                </Form.Group>

                <Button onClick={this.onClick} variant="primary" type="submit">Submit</Button>

              </Form>
            </>
        );
    }
}

export default Contact;