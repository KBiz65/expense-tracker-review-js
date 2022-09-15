import { useState } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [validated, setValidated] = useState(false);
  const [vendor, setVendor] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      console.log("invalid form");
    } else {
      console.log("form is valid");

      // log data to see it...
      console.log(vendor);
      console.log(date);
      console.log(amount);
      console.log(desc);

      // create a new expense...

      // reset the form...
    }
    setValidated(true);
  };

  const vendorChangeHandler = (e) => {
    setVendor(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
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
            <Form.Control
              required
              type="text"
              onChange={vendorChangeHandler}
              className="input-vendor"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              onChange={dateChangeHandler}
              className="input-date"
            />
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
              onChange={amountChangeHandler}
              className="input-amount"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              type="text"
              onChange={descChangeHandler}
              className="input-desc"
            />
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
