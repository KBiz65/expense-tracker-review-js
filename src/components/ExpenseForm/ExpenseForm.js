import { useState } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [validated, setValidated] = useState(false);
  const [vendorInput, setVendorInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
    } else {
      // create a new expense
      const newExpense = {
        vendor: vendorInput,
        date: new Date(dateInput),
        amount: amountInput,
        desc: descInput,
      };

      // reset the form
      setVendorInput("");
      setDateInput("");
      setAmountInput("");
      setDescInput("");

      setValidated(false);
    }
  };

  const vendorChangeHandler = (e) => {
    setVendorInput(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDateInput(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmountInput(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDescInput(e.target.value);
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
              value={vendorInput}
              onChange={vendorChangeHandler}
              className="input-vendor"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              value={dateInput}
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
              value={amountInput}
              placeholder={"0.00"}
              onChange={amountChangeHandler}
              className="input-amount"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              type="text"
              value={descInput}
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
