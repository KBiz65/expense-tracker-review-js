import { Container, Row, Col } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Expense Tracker</h1>
          <ExpenseForm />
          <ExpenseTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
