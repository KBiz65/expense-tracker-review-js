import { useState } from "react";
import { Button, Card, Form, Col, Row } from "react-bootstrap";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [validated, setValidated] = useState(false);
  const [vendorInput, setVendorInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const expenseFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
    } else {
      // gen new id
      const id = Math.trunc(Math.random() * 1000000).toString();

      // package data together
      const newExpenseData = {
        vendor: vendorInput,
        date: dateInput,
        amount: amountInput,
        desc: descInput,
      };

      props.onNewExpenseSubmit(id, newExpenseData);

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
    <Card className="expense-form-container">
      <h2>Add New Expense</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={expenseFormSubmitHandler}
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
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              value={dateInput}
              onChange={dateChangeHandler}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              type="text"
              value={descInput}
              onChange={descChangeHandler}
            />
          </Form.Group>
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
