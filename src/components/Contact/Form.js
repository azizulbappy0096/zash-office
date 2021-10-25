import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSend = (e) => {
    e.preventDefault();
    let tempErr = {}
    if(name.trim() === "") {
      tempErr.name = "Please enter your name"
    }else {
      delete tempErr.name
    }
    if(email.trim() === "") {
      tempErr.email = "Please enter your E-mail"
    }
    else {
      delete tempErr.email
    }
    if(subject.trim() === "") {
      tempErr.subject = "Please enter Subject"
    }else {
      delete tempErr.subject
    }
    if(message.trim() === "") {
      tempErr.message = "Please enter message"
    }else {
      delete tempErr.message 
    }

    if(Object.keys(tempErr).length === 0) {
      setErrors({})
      alert("Success")
    }else {
      setErrors(tempErr)
    }
  };

  return (
    <Form className="contact__form pt-4 pt-md-5 mt-2" onSubmit={handleSend}>
      <Row>
        <Form.Group as={Col} xs={12} md={6} controlId="name" className="mb-3">
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            isInvalid={errors.name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6} controlId="email" className="mb-3">
          <Form.Control
            type="email"
            value={email}
            placeholder="E-mail"
            isInvalid={errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Control
          type="text"
          value={subject}
          placeholder="Subject"
          isInvalid={errors.subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Control
          as="textarea"
          value={message}
          rows={6}
          placeholder="Your message"
          isInvalid={errors.message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
      </Form.Group>

      <Button className="form-btn default-btn mt-3" type="submit">
        {" "}
        Send Message{" "}
      </Button>
    </Form>
  );
}

export default FormComponent;
