import { Container, Row, Col } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import "./App.css";
import { useState } from "react";

const fake_data = [
  {
    id: "238375",
    vendor: "Barnes & Noble",
    date: "2022-09-22",
    amount: "34.99",
    desc: "bought a book",
  },
  {
    id: "130954",
    vendor: "PetSmart",
    date: "2022-09-21",
    amount: "49.99",
    desc: "bought 2 bags dog food",
  },
];

function App() {
  const [expenses, setExpenses] = useState(fake_data);

  const newExpenseDataHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  const optionBtnClickHandler = (id, option) => {
    if (option === "delete") {
      setExpenses((prevExpenses) => {
        return prevExpenses.filter((expense) => expense.id !== id);
      });
    } else if (option === "edit") {
      console.log("still working on edit");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Expense Tracker</h1>
          <ExpenseForm onNewExpenseSubmit={newExpenseDataHandler} />
          <ExpenseTable
            onOptionBtnClick={optionBtnClickHandler}
            expenseList={expenses}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
