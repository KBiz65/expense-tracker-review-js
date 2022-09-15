import { useState } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      console.log("form is not valid");
    } else {
      console.log("form is valid!");
      e.preventDefault();
    }
    setValidated(true);
  };

  return (
    <Card>
      <h2>Add New Expense</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="expense-form"
      >
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Vendor</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control required type="date" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              required
              type="number"
              min={0.01}
              step={0.01}
              placeholder={"0.00"}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>
        <Button className="submit-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default ExpenseForm;
