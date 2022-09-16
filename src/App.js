import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import EditExpenseForm from "./components/EditExpenseForm/EditExpenseForm";
import "./App.css";

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
  const [expenseToEdit, setExpenseToEdit] = useState("");

  const [show, setShow] = useState(false);
  const openEditFormModal = () => setShow(true);
  const closeEditFormModal = () => setShow(false);

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
      setExpenseToEdit(expenses.find((elem) => elem.id === id));
      openEditFormModal();
    }
  };

  const editExpenseDataHandler = (editedExpenseData) => {
    const i = expenses.findIndex((elem) => elem.id === editedExpenseData.id);
    expenses[i] = editedExpenseData;
    closeEditFormModal();
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
      <Modal size="lg" show={show} onHide={closeEditFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpenseForm
            data={expenseToEdit}
            onEditExpenseSubmit={editExpenseDataHandler}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
