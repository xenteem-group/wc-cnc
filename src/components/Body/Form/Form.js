import React, { Component } from "react";
import classes from "./form.module.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class RequestForm extends Component {
  render() {
    return (
      <div className={classes.formWrap}>
        <h2>Bring your ideas to life</h2>
        <Form>
          <Form.Row>
            <Col md={6}>
              <Form.Group as={Col} md="12" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="formPhoneNo">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile Number" />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group as={Col} md="12" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Description"
                  rows="3"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default RequestForm;
