import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import "../ExpenseForm/ExpenseForm.css";

const EditExpenseForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [vendorInput, setVendorInput] = useState(props.data.vendor);
  const [dateInput, setDateInput] = useState(props.data.date);
  const [amountInput, setAmountInput] = useState(props.data.amount);
  const [descInput, setDescInput] = useState(props.data.desc);

  const editExpenseFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
    } else {
      // grab the current input values
      const editedExpenseData = {
        vendor: vendorInput,
        date: dateInput,
        amount: amountInput,
        desc: descInput,
      };

      props.onEditExpenseSubmit(props.data.id, editedExpenseData);

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
    <Form
      noValidate
      validated={validated}
      onSubmit={editExpenseFormSubmitHandler}
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
          <Form.Label>Description (Optional)</Form.Label>
          <Form.Control
            type="text"
            value={descInput}
            onChange={descChangeHandler}
            className="input-desc"
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
            className="input-amount"
          />
        </Form.Group>
      </Row>
      <Button className="submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditExpenseForm;
