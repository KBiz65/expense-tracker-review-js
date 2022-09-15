import { Button, Card, Form, Col, Row } from "react-bootstrap";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <Card>
      <Form className="expense-form">
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Vendor</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number"></Form.Control>
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
