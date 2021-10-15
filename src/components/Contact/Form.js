import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function FormComponent() {
  return (
    <Form className="contact__form pt-5 mt-2">
      <Row>
        <Form.Group as={Col} xs={12} md={6} controlId="name" className="mb-3">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6} controlId="email" className="mb-3">
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Control placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Control as="textarea" rows={6} placeholder="Your message" />
      </Form.Group>

      <Button className="form-btn mt-3"> Send Message </Button>
    </Form>
  );
}

export default FormComponent;
