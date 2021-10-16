import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <Form className="contact__form pt-4 pt-md-5 mt-2" onSubmit={handleSend}>
      <Row>
        <Form.Group as={Col} xs={12} md={6} controlId="name" className="mb-3">
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            isInvalid
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6} controlId="email" className="mb-3">
          <Form.Control
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Control
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Control
          as="textarea"
          value={message}
          rows={6}
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button className="form-btn default-btn mt-3" type="submit">
        {" "}
        Send Message{" "}
      </Button>
    </Form>
  );
}

export default FormComponent;
