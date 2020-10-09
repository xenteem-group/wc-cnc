import React from "react";
import classes from "./form.module.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const schema = yup.object().shape({
  name: yup.string().required("please enter your name"),
  mobNo: yup
    .number()
    .typeError("that doesn't look like a phone number")
    .positive("Mobile number must not contain negative values")
    .integer("please enter valid mobile number")
    .required("please enter your mobile number"),
  email: yup.string().email("that doesn't look like an email").required("please enter your email"),
  description: yup.string().required("please enter description"),
});

const RequestForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.formWrap}>
      <h2>Let us know what you want</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Col md={6}>
            <Form.Group as={Col} md="12" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                ref={register}
              />
              <p>{errors.name?.message}</p>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="formPhoneNo">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile Number"
                name="mobNo"
                ref={register}
              />
              <p>{errors.mobNo?.message}</p>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                ref={register}
              />
              <p>{errors.email?.message}</p>

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
                name="description"
                ref={register}
                rows="3"
              />
              <p>{errors.description?.message}</p>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
export default RequestForm;
