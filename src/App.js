import { Container, Row, Col } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./App.css";

function App() {
  const newExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    console.log("hello from app.js", expenseData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Expense Tracker</h1>
          <ExpenseForm onNewExpenseSubmit={newExpenseDataHandler} />
          <ExpenseTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
