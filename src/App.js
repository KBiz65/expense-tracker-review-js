import { Container, Row, Col } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./App.css";

function App() {
  const expenses = [
    {
      vendor: "book purchase",
      date: "9-22-2022",
      amount: "34.99",
      desc: "bought a book",
    },
    {
      vendor: "bought dog food",
      date: "9-21-2022",
      amount: "49.99",
      desc: "bought two bags from petco",
    },
  ];

  const newExpenseDataHandler = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };
    expenses.push(newExpense);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Expense Tracker</h1>
          <ExpenseForm onNewExpenseSubmit={newExpenseDataHandler} />
          <ExpenseTable items={expenses} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
